import "./styles/main.css";
// add event listener to submit button
document
  .getElementById("destination-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Get the city name from the input field
    const city = document.getElementById("city").value || "Berlin";
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
        const weatherClouds = document.getElementById("weather-clouds");
        const weatherRainfall = document.getElementById("weather-rainfall");
        /* const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`; */

        // Update UI with city name
        weatherCity.innerHTML = `<h3>${city}</h3>`;

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
        weatherDate.innerHTML = `<h4>${formattedDate}</h4>`;

        // Convert temperature from Kelvin to Celsius (toFixed rounds temperature down to 0 decimal places)
        const temperatureCelsius = data.temperature.afternoon - 273.15;
        weatherTemperature.innerHTML = `<h4>Daytime temperature: ${temperatureCelsius.toFixed(
          0
        )} °C</h4>`;

        // Update UI with cloud cover potential
        const cloudCoverPercentage = data.cloud_cover.afternoon;
        if (cloudCoverPercentage < 20) {
          weatherClouds.innerHTML = "<h4>Cloud cover: Clear skies</h4>";
        } else if (cloudCoverPercentage < 40) {
          weatherClouds.innerHTML = "<h4>Cloud cover: Partly cloudy</h4>";
        } else if (cloudCoverPercentage < 60) {
          weatherClouds.innerHTML = "<h4>Cloud cover: Mostly cloudy</h4>";
        } else if (cloudCoverPercentage < 80) {
          weatherClouds.innerHTML = "<h4>Cloud cover: Overcast</h4>";
        } else {
          weatherClouds.innerHTML = "<h4>Cloud cover: Cloudy</h4>";
        }

        // Update UI with rainfall potential
        const precipitationTotal = data.precipitation.total;
        if (precipitationTotal < 1) {
          weatherRainfall.innerHTML = "<h4>Rainfall: Dry</h4>";
        } else if (precipitationTotal < 2.5) {
          weatherRainfall.innerHTML = "<h4>Rainfall: Light</h4>";
        } else if (precipitationTotal < 25) {
          weatherRainfall.innerHTML = "<h4>Rainfall: Moderate</h4>";
        } else if (precipitationTotal < 50) {
          weatherRainfall.innerHTML = "<h4>Rainfall: Heavy</h4>";
        } else {
          weatherRainfall.innerHTML = "<h4>Rainfall: Torrential</h4>";
        }
        /* weatherIcon.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`; */
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  });
