// add event listener to submit button
import "./styles/main.css";

document
  .getElementById("destination-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const city = document.getElementById("city").value;
    // Determine the base URL dynamically
    const baseUrl = "http://localhost:8000";
    fetch(`${baseUrl}/weather?city=${city}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const weatherDetails = document.getElementById("weather-details");
        const weatherIcon = document.getElementById("weather-icon");
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        // Convert temperature from Kelvin to Celsius
        const temperatureCelsius = data.main.temp - 273.15;
        // toFixed rounds temperature down to 0 decimal places
        weatherDetails.innerHTML = `
          <h3>${data.name}</h3>
          <h4>Temperature: ${temperatureCelsius.toFixed(0)} °C</h4> 
          <h4>Weather: ${data.weather[0].description}</h4>
          <img src="${iconUrl}" alt="Weather Icon">
        `;
        weatherIcon.innerHTML = `
          <img src="${iconUrl}" alt="Weather Icon">
        `;
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  });
