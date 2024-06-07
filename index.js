const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/student");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Connection to mongodb. Connecting to example_db database
mongoose.connect("mongodb://localhost:27017/example_db");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));

// GET Route: 
app.get("/getFatima", async (req, res) => {
    // Find first student with name of "Fatima"
    try {
        const foundStudents = await Student.find({ name: "Fatima" });
        console.log(foundStudents);

        // Send back as response
        res.json(foundStudents);
    } catch (err) {

    }
})

// POST Route
app.post("/addFatima", async (req, res) => {
    // Creating student record for Fatima with required properties
    const fatima = new Student({ name: "Fatima", age: 29, hobbies: ["jumprope", "d&d", "coding"] });

    // Insert record into the collection
    try {
        // .save() will add the record to the database.
        await fatima.save();
        console.log("Document inserted")
        res.status(201).json("Fatima record was added!");
    } catch (err) {
        console.error(err);
        res.status(500).json("Fatima record NOT added")
    }
});

// POST Route
// This is the same logic as the post route above. This is a new student record for Wei
app.post("/addWei", async (req, res) => {
    let wei = new Student({ name: "wei", age: "thirty-two", hobbies: ["carpentry", "archery"]});

    try {
        await wei.save();
        console.log("Wei was added!");
        res.status(201).json("Wei record was added");
    } catch (err) {
        res.status(500).json("Wei record NOT added");
    }
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
})