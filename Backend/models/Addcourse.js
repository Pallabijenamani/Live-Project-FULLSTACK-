const mongoose = require("mongoose"); 

//schema
const AddcourseSchema = mongoose.Schema({
    courseName : String,
});

//model(wrapper)
// const Addcourese = mongoose.model("Addcourse" , AddcourseSchema);

//directly

module.exports = mongoose.model("Addstudents",AddcourseSchema);
