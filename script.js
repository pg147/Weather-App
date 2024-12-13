const api_key = 'c3818eca79fe25c0c176665dd827b8ec';

const cityName = document.getElementById('city-input');
const search = document.getElementById('search-btn');
var icon = document.querySelector('.icon');
var weather = document.querySelector('.weather');
var description = document.querySelector('.description');
var temperature = document.querySelector('.temperature');

search.addEventListener('click', () => {
    let city = cityName.value;
    getWeather(city);
})

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`).then((response) => response.json()).then((data) => {
        console.log(data);

        // Assigning icon code from response
        let iconCode = data.weather[0].icon;
        // Inserting img with innerHTML
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" />`

        temperature.innerText = data.main.temp; // Temperature
        weather.innerText = data.weather[0].description; // Weather
    })
}