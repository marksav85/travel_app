import "./styles/main.css";
// add event listener to submit button
document
  .getElementById("destination-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Get the city name from the input field
    const city = document.getElementById("city").value || "Berlin";
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const cityCapitalized = capitalize(city); //capitalizes first letter of city name
    // Get the date from the input field
    const date = document.getElementById("travel-date").value;
    console.log(date);

    // Determine the base URL dynamically
    const baseUrl = "http://localhost:8000";
    fetch(`${baseUrl}/weather?city=${city}&date=${date}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Get weather ids to update UI
        const weatherDetails = document.getElementById("weather-details");
        const weatherCity = document.getElementById("weather-city");
        const weatherDate = document.getElementById("weather-date");
        const weatherTemperature = document.getElementById(
          "weather-temperature"
        );
        const weatherCard = document.getElementById("weather-card");
        const weatherClouds = document.getElementById("weather-clouds");
        const weatherRainfall = document.getElementById("weather-rainfall");
        /* const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`; */

        // Update UI with city name
        weatherCity.innerHTML = `<h3>${cityCapitalized}</h3>`;

        // Covert date from YYYY-MM-DD to DD Month YYYY
        function formatDate(inputDate) {
          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];

          const dateObject = new Date(inputDate);
          const day = dateObject.getDate();
          const month = months[dateObject.getMonth()];
          const year = dateObject.getFullYear();

          const formattedDate = `${day}${getDaySuffix(day)} ${month} ${year}`;

          return formattedDate;
        }

        function getDaySuffix(day) {
          if (day >= 11 && day <= 13) {
            return "th";
          }
          const lastDigit = day % 10;
          switch (lastDigit) {
            case 1:
              return "st";
            case 2:
              return "nd";
            case 3:
              return "rd";
            default:
              return "th";
          }
        }

        const inputDate = data.date;
        const formattedDate = formatDate(inputDate);
        console.log(formattedDate); // eg. 1st January 2024

        // Update UI with formatted date
        weatherDate.innerHTML = `<h5>${formattedDate}</h5>`;

        // Update UI with temperature
        const convertTemperature = data.temperature.afternoon - 273.15; // Convert temperature from Kelvin to Celsius
        const temperatureCelsius = convertTemperature.toFixed(0); // Round temperature down to 0 decimal places
        weatherTemperature.innerHTML = `<h5>${temperatureCelsius} °C</h5>`;
        // Temperature description variables
        const hot =
          "background: linear-gradient(to bottom right, #FF5733, #FD9728);";
        const warm =
          "background: linear-gradient(to bottom right, #F0AE05, #FFD700);";
        const mild =
          "background: linear-gradient(to bottom right, #FFD700, #4CAF50);";
        const cold =
          "background: linear-gradient(to bottom right, #4CAF50, #3498DB);";
        const freezing =
          "background: linear-gradient(to bottom right, #3498DB, #4B595E);";

        if (temperatureCelsius >= 30) {
          weatherCard.setAttribute("style", `${hot};`);
        } else if (temperatureCelsius >= 20) {
          weatherCard.setAttribute("style", `${warm};`);
        } else if (temperatureCelsius >= 10) {
          weatherCard.setAttribute("style", `${mild};`);
        } else if (temperatureCelsius >= 0) {
          weatherCard.setAttribute("style", `${cold};`);
        } else {
          weatherCard.setAttribute("style", `${freezing};`);
        }

        // Update UI with cloud cover potential
        const cloudCoverPercentage = data.cloud_cover.afternoon;
        if (cloudCoverPercentage < 20) {
          weatherClouds.innerHTML = "<h5>Clear skies</h5>";
        } else if (cloudCoverPercentage < 40) {
          weatherClouds.innerHTML = "<h5>Partly cloudy</h5>";
        } else if (cloudCoverPercentage < 60) {
          weatherClouds.innerHTML = "<h5>Mostly cloudy</h5>";
        } else if (cloudCoverPercentage < 80) {
          weatherClouds.innerHTML = "<h5>Overcast</h5>";
        } else {
          weatherClouds.innerHTML = "<h5>Cloudy</h5>";
        }

        // Update UI with rainfall potential
        const precipitationTotal = data.precipitation.total;
        if (precipitationTotal < 1) {
          weatherRainfall.innerHTML = "<h5>Dry</h5>";
        } else if (precipitationTotal < 2.5) {
          weatherRainfall.innerHTML = "<h5>Light</h5>";
        } else if (precipitationTotal < 25) {
          weatherRainfall.innerHTML = "<h5>Moderate</h5>";
        } else if (precipitationTotal < 50) {
          weatherRainfall.innerHTML = "<h5>Heavy</h5>";
        } else {
          weatherRainfall.innerHTML = "<h5>Torrential</h5>";
        }

        // Update UI with weather icons
        const weatherIcon = document.getElementById("weather-icon");
        if (
          cloudCoverPercentage < 20 &&
          precipitationTotal < 2.5 &&
          temperatureCelsius > 0
        ) {
          const iconUrl = require("./media/weather-icons/sun.svg");
          weatherIcon.innerHTML = `<img src="${iconUrl.default}" alt="Weather Icon">`;
        } else if (
          cloudCoverPercentage < 60 &&
          precipitationTotal < 2.5 &&
          temperatureCelsius > 0
        ) {
          const iconUrl = require("./media/weather-icons/cloud_sun.svg");
          weatherIcon.innerHTML = `<img src="${iconUrl.default}" alt="Weather Icon">`;
        } else if (
          cloudCoverPercentage < 100 &&
          precipitationTotal < 2.5 &&
          temperatureCelsius > 0
        ) {
          const iconUrl = require("./media/weather-icons/cloud.svg");
          weatherIcon.innerHTML = `<img src="${iconUrl.default}" alt="Weather Icon">`;
        } else if (precipitationTotal < 25 && temperatureCelsius > 0) {
          const iconUrl = require("./media/weather-icons/light_rain.svg");
          weatherIcon.innerHTML = `<img src="${iconUrl.default}" alt="Weather Icon">`;
        } else if (precipitationTotal < 150 && temperatureCelsius > 0) {
          const iconUrl = require("./media/weather-icons/rain.svg");
          weatherIcon.innerHTML = `<img src="${iconUrl.default}" alt="Weather Icon">`;
        } else if (precipitationTotal > 2.5 && temperatureCelsius < 0) {
          const iconUrl = require("./media/weather-icons/cloud_snowflake.svg");
          weatherIcon.innerHTML = `<img src="${iconUrl.default}" alt="Weather Icon">`;
        } else {
          const iconUrl = require("./media/weather-icons/snowflake.svg");
          weatherIcon.innerHTML = `<img src="${iconUrl.default}" alt="Weather Icon">`;
        }
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  });
