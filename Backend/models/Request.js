const mongoose = require("mongoose"); // CJS

const RequestSchema = mongoose.Schema({
  to: String,
  from: String,
  status: String,
  mode: String,
  ambience: String,
  course: String,
});

module.exports = mongoose.model("Request", RequestSchema);