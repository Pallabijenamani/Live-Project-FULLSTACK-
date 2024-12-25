const express = require ("express");


 const app = express();



//middlewares
app.use(express.json());


// check routes
app.get("/",(req,res)=>{
    res.status(200).send({msg: " it is working"});
})

//port
 const port = process .env.PORT || 5001;

 //server listening
 app.listen(port,() => console.log(`server is running at ${port}`) );