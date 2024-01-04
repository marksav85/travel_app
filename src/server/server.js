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
    // Obtain city name from app.js user input
    const city = req.query.city || "Berlin"; // Default city is Berlin
    // Obtain date from app.js user input
    const currentDate = new Date().toISOString().slice(0, 10); // Gets todays date and slices YYYY-MM-DD
    const date = req.query.date || currentDate; // Default date is today
    console.log(currentDate);
    // Geocoding API request to obtain latitude and longitude from city name
    const geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    const geocodingResponse = await fetch(geocodingUrl);
    const geocodingData = await geocodingResponse.json();
    /* console.log(geocodingData); */
    // Extract latitude and longitude from the Geocoding API response
    const latitude = geocodingData[0].lat;
    const lat = latitude.toFixed(0);
    const longitude = geocodingData[0].lon;
    const lon = longitude.toFixed(0);
    // OpenWeather API request using the obtained latitude and longitude
    /* const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; */
    const openWeatherUrl = `https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=${lat}&lon=${lon}&date=${date}&appid=${apiKey}`;
    console.log(openWeatherUrl);
    const openWeatherResponse = await fetch(openWeatherUrl);
    const openWeatherData = await openWeatherResponse.json();
    res.json(openWeatherData);
    /* console.log(openWeatherData); */
  } catch (err) {
    console.log("Error fetching weather data:", err);
    res.status(500).send("Internal Server Error");
  }
});
