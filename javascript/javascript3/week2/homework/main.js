//JavaScript3 - Week 2


//Movies exercise

async function movies() {
  const getUrl = await fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
  const movie = await getUrl.json()

  const badMovies = movie.filter(item => item.rating <= 4)
  // console.log(badMovies);
  const badMovies2000 = badMovies.filter(item => item.year >= 2000)
  // console.log(badMovies2000);
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
  console.log("I am called asynchronously");
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
    if (navigator.geolocation) {
      resolve((showPosition)=>{
        
      })

      navigator.geolocation.getCurrentPosition(showPosition)
        function showPosition(location) {  console.log(location);   }

    } else { reject('can not find your location') }

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