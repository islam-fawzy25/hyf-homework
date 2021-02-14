const myFavorietDishes = ['pasta','pizza','shawrma'];
const ulElem = document.getElementById('favorietDishes');
ulElem.innerHTML = 'My Favoriet Dishes'


const creatLi = document.createElement('li')
ulElem.appendChild(creatLi)

creatLi.innerText = 'hi';

 const go = creatLi + ulElem

for (i=0 ; i < myFavorietDishes.length ; i++){
myFavorietDishes[i] 
}

window.color 
document.getElementById('color').addEventListener('click',myFunction)
function myFunction(){
   document.querySelector('body').style.backgroundColor ='Pink'
}



}

const podcasts = [{
   name: 'The mystery om of Johan Klausen Varbourg',
   imageUrl: 'https://picsum.photos/536/354'
   },
   {
   name: 'Tips about dogs with small legs',
   imageUrl: 'https://picsum.photos/536/354'
   },
   {
   name: 'You, me, we and us',
   imageUrl: 'https://picsum.photos/536/354'
   },
   {
   name: 'Breakfast news - Dinner edition'
   }
   ];
   
   let podcastUl = document.createElement("ul");
   
   for (let i = 0; i < podcasts.length; i++) {
   
   let myPodcast = document.createElement("li");
   let headder = document.createElement("h1");
   headder.innerHTML = podcasts[i].name;
   myPodcast.appendChild(headder);
   
   if (podcasts[i].imageUrl) {
   let myImage = document.createElement("img");
   myImage.src = podcasts[i].imageUrl;
   myImage.alt = "";
   //myImage.setAttribute("src", podcasts[i].imageUrl);
   myPodcast.appendChild(myImage);
   }
   podcastUl.appendChild(myPodcast);
   
   }
   
   let Body = document.querySelector("body");
   Body.appendChild(podcastUl);



//const test = 'text'
// myFavorietDishes.forEach(element => {
 
});
// const go = creatLi + ulElem
// const declarLi= document.querySelector('ul')
