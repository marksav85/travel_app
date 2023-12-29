// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
//
const fetch = require("node-fetch");
// Start up an instance of app
const app = express();

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
    const apiKey = "";
    const city = req.query.city || "Berlin"; //Berlin is default city
    const apiUrl =
      req.query.apiUrl ||
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.log("Error fetching weather data:", err);
  }
});
