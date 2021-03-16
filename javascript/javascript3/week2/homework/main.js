//JavaScript3 - Week 2

//Movies exercise

async function movies() {
  const getUrl = await fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
  const movie = await getUrl.json()
  const badMovies = movie.filter(item => item.rating <= 4)
  console.log(badMovies);
  const badMovies2000 = badMovies.filter(item => item.year >= 2000)
  console.log(badMovies2000);
}
movies()

//Promise that resolves after set time
async function delay(resolveAfter) {
  const delayPromis = new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000 * resolveAfter);
  })
  return delayPromis
}

delay(8).then(() => {
  console.log("I am called asynchronously after 8 seconds");
  // logged out after 8 seconds
});

// //Rewrite time
async function setTimeoutPromise(delayTime) {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, delayTime);

  })
}
setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

async function getCurrentLocation() {
  new Promise((resolve, reject) => {
    function getLocation() {
      if (navigator.geolocation) {
        resolve('her')
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        reject('Error!!')
      }
    }

    function showPosition(position) {
      console.log(position);
    }
    return getLocation()
  })
}

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  })

//Fetching and waiting
// With promise 
const waitingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => console.log(data))
    resolve('called with promise after 3 seconds')

  }, 3000);
})
waitingPromise.then(msg => console.log(msg))

// With async/wait
async function waitingFunction() {
  try {
    const getJson = await fetch('http://api.open-notify.org/astros.json')
    const getData = await getJson.json()
    setTimeout(() => {
      console.log(getData);
    }, 3000);
  } catch { console.log('Error'); }
}
waitingFunction()

// i prefer async/ await









