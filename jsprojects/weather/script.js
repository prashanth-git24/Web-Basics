document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const Weatherinfo = document.getElementById("weather-info");
  const CitynameDisplay = document.getElementById("city-name");
  const tempratureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "372c9e45c27d5a5b4c06f6ee6d04a404";

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const weatherdata = await fetchweatherData(city);
      DisplayweatherData(weatherdata);
    } catch (error) {
      Showerror();
    }
  });

  async function fetchweatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    console.log(typeof response);
    console.log("response", response);
    if (!response.ok) {
      throw new Error(" City Not found");
    }
    const data = await response.json();

    return data;
  }
  function DisplayweatherData(data) {
    console.log(data);
    const { name, main, weather } = data;
    CitynameDisplay.textContent = name;
    tempratureDisplay.textContent = `Temperatur:${main.temp}`;
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

    Weatherinfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function Showerror() {
    Weatherinfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
