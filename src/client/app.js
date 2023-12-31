document
  .getElementById("weatherForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const city = document.getElementById("city").value;
    fetch(`/weather?city=${city}`)
      .then((response) => response.json())
      .then((data) => {
        const weatherDetails = document.getElementById("weather-details");
        weatherDetails.innerHTML = `
          <h2>Weather in ${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  });
