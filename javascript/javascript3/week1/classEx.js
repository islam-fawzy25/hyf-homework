
// 1. Exercise : JSON 





/*

fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(item => {

        const head = document.createElement('ul')
        document.body.appendChild(head)
        head.innerText = `There are  astronauts in space, they are:`

        const astronauts = item.people;
        astronauts.forEach(element => {
            const title = element.name
            console.log(title);
            const li = document.createElement('li')

head.appendChild(li)
li.innerText=title
            //console.log(element);
        });
        console.log(astronauts);
        console.log(item);
    })

*/

/*
async function hey() {
    const next = await fetch()
    const got = await next.json()
    const code = next.url
    console.log(code);

}*/ 

const printName = document.createElement('h3')
const imgDog = document.createElement('img')


setInterval(() => {
    const getGogImg = fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(dogData => {
        imgDog.src = dogData.message
        imgDog.width='400'
    })
    const getBreedsName = fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(dogName => {
        const arrNames = dogName.message
        const breeds = Object.keys(arrNames)
        const randomName = breeds[Math.floor(Math.random() * breeds.length)]
        console.log(randomName);
        printName.innerText = randomName
    })
}, 2000);


document.body.appendChild(imgDog)
document.body.appendChild(printName)

























/*
const orderJs = { name: 'Pizza', id: 5, price: '100', drinks: 'pepsi', extra: false }
console.log(orderJs);
const orderJson = JSON.stringify(orderJs)
console.log(orderJson);



fetch('https://yesno.wtf/api/')
    .then(response => response.json())
    .then(yesOrNoData => {
        console.log(yesOrNoData.image);
        // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
        const img = document.createElement('img')
        img.src = yesOrNoData.image
        document.body.appendChild(img)
    });


const numberOfAstronauts = [{
    ASTRONAUT_NAME1: '',
    ASTRONAUT_NAME2: '',
    ASTRONAUT_NAME3: '',
    ASTRONAUT_NAME4: '',
    ASTRONAUT_NAME5: ''
}]
fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(astros => {
        console.log(astros.people);
        const jsonNames = astros.people
        console.log(jsonNames);

        // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
        const ul = document.createElement('ul')
        document.body.appendChild(ul)

        jsonNames.forEach(element => {
            const li = document.createElement('li')
            ul.appendChild(li)
            li.innerText = element.name
        })
    })

const dogsimg = document.createElement('img')
dogsimg.width = 400
dogsimg.height = 400
const ul = document.createElement('ul')
const li = document.createElement('li')
document.body.appendChild(ul)
ul.appendChild(li)
ul.appendChild(dogsimg)

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(images => {
        const dogsImagesUrl = images.message
        console.log(dogsImagesUrl);
        dogsimg.src = dogsImagesUrl

        setInterval(() => {
            //location.reload(true)
        }, 2000);
    })

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(array => {
        const breedsObj = array.message
      const breedsArray=  Array.from(breedsObj)
        console.log(breedsObj);
        console.log(breedsArray);
       // breedsArray.forEach(item => li.innerText=item  )
    })

// Display a random image of a breed from the list  https://dog.ceo/api/breed/[BREEDNAME]/images/random
/*
fetch(' https://dog.ceo/api/breed/[BREEDNAME]/images/random')
.then(response=>response.json())
.then(image=>{
    console.log(image);
})
*/


