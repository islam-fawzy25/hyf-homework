// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0
const ApiKey = '0904bdb6c689df374189c5ab06c21df6 '

//get elements
const button = document.getElementById('button')
const input = document.getElementById('input')
const main = document.querySelector('main')
const iconElement = document.querySelector('.weather-icon img')
const searchElement = document.getElementById('map')
const userLocation = document.getElementById('userLocation')

// Creat elements
const cityName = document.createElement('h3')
const temperature = document.createElement('div')
const weatherType = document.createElement('div')
const windSpeed = document.createElement('div')
const clouds = document.createElement('div')
const sunrise = document.createElement('div')
const sunset = document.createElement('div')

// Append elements
main.appendChild(cityName)
main.appendChild(temperature)
main.appendChild(clouds)
main.appendChild(weatherType)
main.appendChild(windSpeed)
main.appendChild(sunset)
main.appendChild(sunrise)

const searchedCity = ''
const latData = 0
const lngData = 0

// main function to get data from JSON
const getWeather = function () {
    let searchedCity = input.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=metric&appid=${ApiKey}`)
        .then(Response => Response.json())
        .then(weatherData => readData(weatherData))
}
// get and print weather data on DOM
function readData(data) {
    console.log(data);// got data array 
    //print datat in elements 
    cityName.innerText = data.name + ' ' + data.sys.country
    temperature.innerText = Math.round(data.main.temp) + ' °C'
    // weatherType.innerText = data.weather[0].main
    windSpeed.innerText = 'Wind Speed :  ' + Math.round(data.wind.speed) + ' m/s'
    // clouds.innerText = 'Clouds :  ' + data.clouds.all
    sunrise.innerText = 'Sunrise   ' + new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    })
    sunset.innerText = 'Sunset   ' + new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    })                    //`icons/${data.weather[0].icon}.png`
    iconElement.src =   `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    // location variable and calling back map function 
    let latData = data.coord.lat
    let lngData = data.coord.lon
    initMap(latData, lngData)
}
// Google map functions 
function initMap(latitude, longitude) {
    const url = { lat: latitude, lng: longitude };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: url,
    });
    // The marker, positioned at url
    const marker = new google.maps.Marker({
        position: url,
        map: map,
    });
}
// call weather data with click on button 
button.addEventListener('click', function () {
    getWeather()
    readData()
})

// get weather by  user location 
userLocation.addEventListener('click', function () {
    if ('geolocation' in navigator) {
        console.log('geolocation available ');
        navigator.geolocation.getCurrentPosition(position => {
          //  console.log(position);
            const lat = position.coords.latitude
            const long = position.coords.longitude
            const getWeather = function () {
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${ApiKey}`)
                    .then(Response => Response.json())
                    .then(weatherData => readData(weatherData))
            }
            getWeather()
            readData(data)
            initMap(lat, long)
        })
    }
})



//google api =AIzaSyCFaZoWcHNecGECjLPw9VuU7D89ARNieg0

