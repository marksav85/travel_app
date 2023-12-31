document
  .getElementById("destination-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const city = document.getElementById("city").value;
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=52&lon=13&appid="
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const weatherDetails = document.getElementById("weather-details");
        weatherDetails.innerHTML = `
          <h2>Weather in ${data.timezone}</h2>
          <p>Temperature: ${data.current.temp} °C</p>
          <p>Weather: ${data.current.weather[0].description}</p>
        `;
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  });
