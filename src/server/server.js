// Require Express to run server and routes
const express = require("express");
// Require Fetch
const fetch = require("node-fetch");
// Start up an instance of app
const app = express();
// Middleware
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Require dotenv for environment variable
require("dotenv").config();
// Initialize the main project folder
app.use(express.static("client"));
// Setup Server
const port = 8000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
// Store environment variable API key in variable
const apiKey = process.env.API_KEY;

// GET route
app.get("/weather", async (req, res) => {
  try {
    const city = req.query.city || "Berlin"; // Default city is Berlin
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
    console.log(data);
  } catch (err) {
    console.log("Error fetching weather data:", err);
    res.status(500).send("Internal Server Error");
  }
});
