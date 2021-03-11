// my Api : cryDd2N06MslIPCYgQc7yBrOH3WucmCo

//1- creat url with api 
//2- fetch data and found array of gighes linkes and 
//3- add that by foreach to element in html 
//4- implement addeventlistner to searched word by keypress
//5- implement onclick to button 
//6- implement limit of gighes images 

//get elements ready for work
const input = document.getElementById('input')
const button = document.getElementById('button')
const numberOfGif = document.getElementById('numberOfGif')
const main = document.querySelector('main')
const ul = document.createElement('ul')
main.appendChild(ul)

const getGif = function () {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=cryDd2N06MslIPCYgQc7yBrOH3WucmCo&limit=${numberOfGif.value}`)
        .then(request => request.json())
        .then(gif => {
            console.log(gif);
            const gifsArray = gif.data
            ul.innerHTML = ''
            gifsArray.forEach(item => {
                const li = document.createElement('li')
                ul.appendChild(li)
                const img = new Image(300, 300)
                li.appendChild(img)
                img.src = item.images.original.url
            })
        })
}
//input.addEventListener('keyup', getGif)
button.addEventListener('click', getGif)




