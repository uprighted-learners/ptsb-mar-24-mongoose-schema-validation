const mongoose = require("mongoose");

// student schema
const studentSchema = new mongoose.Schema({
    name: String, //name must be String
    age: Number, //age must be Number
    hobbies: Array, //hobbies must be an Array
    current: Boolean //current must be a Boolean
}, { versionKey: false });

// Crate and export the Student model using the schema above
module.exports = mongoose.model("Student", studentSchema);