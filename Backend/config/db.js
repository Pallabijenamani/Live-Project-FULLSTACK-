const mongoose = require("mongoose"); //cjs
// import mongoose from "mongoose";
require("dotenv").config();

const connectDB = ()  => {
     mongoose
     .connect(process.env.mongoURI , {
        useNewUrlParser : true,
        useUnifiedTopology: true, 
     })

     .then(() => console.log("mongoose connected..."))
     .catch ((err) => {
        console.error(err);
        process.exit(1);
     });
};

module.exports = connectDB;
