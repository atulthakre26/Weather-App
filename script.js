const apiKey = "cc55933f31c159df79bab864dfece1e8"; // 🔑 Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city.trim()) {
    alert("Please enter a city name");
    return;
  }

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    console.log(data); // 🐞 Debug the response

    if (data.cod === "404") {
      alert("City not found. Please try again.");
      return;
    }

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText = `Wind Speed: ${data.wind.speed} km/h`;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
  }
}

