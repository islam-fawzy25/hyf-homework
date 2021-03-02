//Warm Up 
//.1
window.addEventListener('load', function () {

    setTimeout(() => {
        console.log('Called after 2.5 seconds');
    }, 2500);

})
//2.
function delayFunction(delay, string) {
    setTimeout(() => {
        console.log(string);
    }, delay * 1000);
};
//delayFunction(5,'This string logged after 5 secconds');
//delayFunction(3,'This string logged after 3 secconds');

//3.
const button = document.getElementById('btn');
button.addEventListener('click', function () {
    setTimeout(() => {
        console.log('Called after 5 seconds');
    }, 5000);
});

//4.
const earthLooger = () => { console.log('earth'); };
const saturnLooger = () => { console.log('saturn'); };

function planetLogFunction() {
    //  console.log(print);
}
planetLogFunction(saturnLooger())
planetLogFunction(earthLooger())

//5.
function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLinkLat = document.querySelector('#map-link');
    const mapLinkLong = document.querySelector('#longitude');
    mapLinkLat.href = '';
    mapLinkLat.textContent = '';
    mapLinkLong.href = '';
    mapLinkLong.textContent = '';

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = '';
        mapLinkLat.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLinkLat.textContent = `This is  latitude: ${latitude} `;
        mapLinkLong.textContent = `This is  longitude: ${longitude} `;
    }

    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
//!!!!!!!!!!!!!!???
//7.

function runAfterDelay(delay, callback) {
    setTimeout(() => {
        return callback();
    }, delay * 1000);
}
//???!!!!!!!!!!!

runAfterDelay(4,  () => console.log('Should be looged after 4 seconds'))
//8.
const body = document.querySelector('body');

body.addEventListener('dblclick', function () {
    setTimeout(() => {
        console.log('double click!');
    }, 500);
});
//9.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    logFunnyJoke=() => console.log('Funny joke');
    logBadJoke = () => console.log('Bad joke');
    shouldTellFunnyJoke == true ? logFunnyJoke() : logBadJoke();
};
jokeCreator(true);
jokeCreator(false);

