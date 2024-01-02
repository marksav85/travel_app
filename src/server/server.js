// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
//
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

// Import API key as environment variable
require("dotenv").config();
const myApiKey = process.env.API_KEY;
console.log(myApiKey);

const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("client"));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening() {
  console.log("running on localhost: " + port);
  console.log("server running successfully!");
}

// GET route
app.get("weather", async (req, res) => {
  try {
    const apiKey = myApiKey;
    console.log(apiKey);
    //const city = req.query.city || "Berlin"; //Berlin is default city
    const apiUrl =
      req.query.apiUrl ||
      `https://api.openweathermap.org/data/3.0/onecall?lat={52}&lon={13}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    console.log(response);
    const data = await response.json();
    res.json(data);
    console.log(data);
  } catch (err) {
    console.log("Error fetching weather data:", err);
  }
});
