// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0
const ApiKey = '0904bdb6c689df374189c5ab06c21df6 '

//get elements
const button = document.getElementById('button')
const input = document.getElementById('input')
const main = document.querySelector('main')
const iconElement = document.querySelector('.weather-icon img')
const searchElement = document.getElementById('map')

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

// main function to implement App
const getWeather = function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${ApiKey}`)
        .then(Response => Response.json())
        .then(data => {
            console.log(data);// got data array 
            //print datat in elements 
            cityName.innerText = data.name + ' ' + data.sys.country
            temperature.innerText = Math.round(data.main.temp) + ' °C'
           // weatherType.innerText = data.weather[0].main
            windSpeed.innerText = 'Wind Speed :  ' + Math.round(data.wind.speed) + ' m/s'
           // clouds.innerText = 'Clouds :  ' + data.clouds.all
            sunrise.innerText = 'Sunrise   ' + new Date(data.sys.sunrise * 1000).toLocaleTimeString()
            sunset.innerText = 'Sunset   ' + new Date(data.sys.sunset * 1000).toLocaleTimeString()
            iconElement.src = `icons/${data.weather[0].icon}.png`
            //  let lat = data.coord.lat
            //let lng = data.coord.lon

        })
}
button.addEventListener('click', getWeather)

// get user location // i will compelet optional part later :)
if ('geolocation' in navigator) {
    console.log('geolocation available ');
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
    })
}

