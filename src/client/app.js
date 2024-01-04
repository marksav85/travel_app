import "./styles/main.css";
// add event listener to submit button
document
  .getElementById("destination-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Get the city name from the input field
    const city = document.getElementById("city").value || "Berlin";
    // Determine the base URL dynamically
    const baseUrl = "http://localhost:8000";
    fetch(`${baseUrl}/weather?city=${city}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Get weather ids to update UI
        const weatherDetails = document.getElementById("weather-details");
        const weatherCity = document.getElementById("weather-city");
        const weatherTemperature = document.getElementById(
          "weather-temperature"
        );
        const weatherClouds = document.getElementById("weather-clouds");
        const weatherRainfall = document.getElementById("weather-rainfall");
        /* const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`; */
        // Update UI with weather data
        weatherCity.innerHTML = `<h3>${city}</h3>`;
        // Convert temperature from Kelvin to Celsius (toFixed rounds temperature down to 0 decimal places)
        const temperatureCelsius = data.temperature.afternoon - 273.15;
        weatherTemperature.innerHTML = `<h4>Daytime temperature: ${temperatureCelsius.toFixed(
          0
        )} °C</h4>`;
        weatherClouds.innerHTML = `<h4>Cloud cover: ${data.cloud_cover.afternoon}</h4>`;
        weatherRainfall.innerHTML = `<h4>Total rainfall: ${data.precipitation.total}</h4>`;
        /* weatherIcon.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`; */
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  });
