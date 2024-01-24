async function getWeather() {
    const apiKey = '2d03947021467eb24897a93c29fd6cea'; 
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayWeather(weatherData) {
    const weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.innerHTML = ''; // Очистить предыдущие данные

    const weatherInfo = document.createElement('div');
    weatherInfo.innerHTML = `
        <h2>Weather in ${weatherData.name}, ${weatherData.sys.country}</h2>
        <p>Temperature: ${weatherData.main.temp} °C</p>
        <p>Humidity: ${weatherData.main.humidity} %</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
    `;

    weatherContainer.appendChild(weatherInfo);
}