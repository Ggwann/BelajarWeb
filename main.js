// Import the necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// Create the Express application
const app = express();

// Configure body parser
app.use(bodyParser.json());

// Configure morgan to log requests to the console
app.use(morgan("dev"));

// Configure CORS to allow requests from all origins
app.use(cors());

// Define the endpoints
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  // Do something with the user data
  console.log(name, email);

  // Return a success response
  res.status(201).send({ message: "User created successfully" });
});

// Start the server
app.listen(3000);