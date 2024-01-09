## Date created

09/01/2024

## Project Title

Travel App

## What is it?

This project is a travel app that uses Web API from _OpenWeatherMap.org_ to search for weather data at a destination location and return it to the user.

## How do I use it?

The user must input a destination location by city name and date of travel. If no data is input, it will default to Berlin and todays date. After clicking the submit button, the weather data will be displayed in the UI for the input destination and date.

## What locations can I search for?

The user must search by city. The Open Weather Geocoding API is used to retrieve weather data for the city from its database. If the input city cannot be found in the database, an error message will be returned to notify the user.

## What date ranges can I search?

The user can search for an furture forecars upto 1.5 years in the future. Historical data can also be searched for up 40+ years previous.

## What weather data will be displayed?

The data returned will consist of: city name, date, temperature (in Celsius), cloud cover, rainfall, and an icon representing the relevant weather data.

## Implementation

**Node** and **Express** packages are used for this build. After cloning the project, and installing Node.js, running _npm install_ from the terminal should install the relevant packages required. _Server.js_ contains the server-side logic, and the _client/app.js_ the client-side logic. Environment variables are used for the Open Weather API key, so any new setup will require a new API Key from OpenWeatherAPI and the key stored in a .env file.

## Extras

OpenWeatherMap.org Web API developer credentials

## Technologies used

**HTML** ,**Bootstrap CSS**, **JavaScript**, **Node.js**, **Express**
