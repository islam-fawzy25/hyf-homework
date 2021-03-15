
// setTimeout(() => {
//     console.log('hello');
//     setTimeout(() => {
//         console.log('2');
//     }, 1000);
//     console.log('1');
// }, 2000);


// //exercise 1

fetch('https://yesno.wtf/api')
    .then(respone => respone.json())
    .then(data => console.log(data))

async function get() {

    const getLink = await fetch('https://yesno.wtf/api')
    const getData = await getLink.json()
    console.log(getData);
}
get()


//ex2

async function getError() {
    try {
        const getJson = await fetch('https://knajskdskj.jasdk')
        const getData = await getJson.json()
        console.log(getData);

    } catch (err) {
        console.log(err);
        throw new Error('fail')
    }
}
getError()

// async function getNew() {
//     try {
//         await getError()
//     } catch (err) {
//         console.log(err);
//     }

// }


// getNew()


// Exercise 4


const myPromise = new Promise((resolve, reject) => {

    const users = ['benna', 'magdy', 'carolina']
    const user = users[Math.floor(Math.random() * 4)]

    setTimeout(() => {
        if (user == undefined) {
            reject('faild')
        } else { resolve(`Welcom ${user}`) }

    }, 5000);

})

// myPromise.then(name => console.log(name))
// .catch(data => console.log(data))


async function getLoggedInUsers() {
    try {
        const getPromise = await myPromise
        console.log(getPromise);
    } catch (error) { console.log(error) }
}
getLoggedInUsers()

// //ex 5

async function lastOne() {
    const getMovies = await fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    const movie = await getMovies.json()

    const getLink = await fetch(
        "http://api.open-notify.org/astros.json"
    )

    const getAst = await getLink.json()

    console.log(getAst);
    console.log(movie);

}

lastOne()


// // Exercise 5

// async function getAstronauts() {
//     try {
//         const astroResponse = await fetch("http://api.open-notify.org/astros.json");
//         const astroData = await astroResponse.json();
//         console.log(astroData.people.map(person => person.name));
//         return astroData;
//     } catch (error) {
//         throw "Fetchin the astronauts went wrong";
//     }
// }

// async function getMovies() {
//     try {
//         // await getAstronauts();
//         const moviesResponse = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
//         const moviesData = await moviesResponse.json();
//         console.log(moviesData.map(movie => movie.title));
//         return moviesData;
//     } catch (error) {
//         throw "Fetchin the movies went wrong";
//     }
// }

// (async () => {
//     await getAstronauts();
//     console.log("Hello");
//     await getMovies();
// })();



// Exercise 6


// Promise.all([getAstronauts(), getMovies(), navigator.getBattery()])
//     .then(
//         ([astronauts, movies, battery]) => {
//             console.log(movies, battery);
//         }
//     ).catch((err) => {
//         console.log(err);
//     });


// Promise.all([
//     fetch("http://api.open-notify.org/astros.json"),
//     fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
// ]).then(async ([astroResponse, moviesResponse]) => {
//     const astroData = await astroResponse.json();
//     const astroNames = await astroData.people.map(person => person.name);
//     const moviesData = await moviesResponse.json();
//     const movieTitle = await moviesData.map(movie => movie.title);
//     return [astroNames, movieTitle]
// })
//     .then((responseText) => {
//         console.log(responseText);

//     }).catch((err) => {
//         console.log(err);
//     });


