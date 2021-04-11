const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch')

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Start up an instance of app
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// // Spin up the server
app.listen(8090, function () {
    console.log('App successfully listening on port 8090!')
})

// Initialize all route with a callback function
app.get('/all', sendData);
function sendData (req, res) {
  res.send(projectData);
};

// Post Route
app.post('/add', addData);
function addData(req, res) {
  projectData.date = req.body.date;
  projectData.temp = req.body.temperature;
  projectData.user = req.body.user;
  console.log(projectData);
}
