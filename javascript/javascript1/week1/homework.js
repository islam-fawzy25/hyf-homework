  // Home work


// Age-ify (A future age calculator) 

const yearOfBirth = 1987
const yearFuture = 2027
const age = yearFuture-yearOfBirth

console.log('You will be',(age),'years old in 2027')

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017
const dogYearFuture = 2027

const shouldShowResultInDogYears  = true

let dogYear


if(shouldShowResultInDogYears){
  dogYear = (dogYearFuture - dogYearOfBirth)* 7
}else{
  dogYear = dogYearFuture - dogYearOfBirth
}
console.log(dogYear)

//Housey pricey (A house price estimator)

//housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
// Advise to peter

let wide = 8
let deep = 10 
let high = 10
let volumeInMeters  =wide * deep * high
let gardenSizeInM2 = 100
let houseCost = 20500000
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 

const salesAdviseText1 = 'paying too much'
const salesAdviseText2 = 'paying too little'
let salesAdvise 
let clientName = 'peter '

 if (houseCost>housePrice ) {
    salesAdvise = clientName +salesAdviseText1  
 }else{
   salesAdvise = clientName + salesAdviseText2
   }

 console.log(salesAdvise)

// Advise to julia 
 wide = 5
 deep = 11 
 high = 8
  volumeInMeters  =wide * deep * high
 gardenSizeInM2 = 70
 houseCost = 1000000 
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 
clientName ='julia '
if (houseCost>housePrice ) { 
  salesAdvise = clientName + salesAdviseText1  
}else{
  salesAdvise = clientName + salesAdviseText2 
}
console.log(salesAdvise)


// 4. Ez Namey (Startup name generator)

const firstWords =["Easy ","Awesome ","Amazing ","Majestic ","Wonderful ","Surprising ",
"Incredible ","Hit ","Success ","victory " ]
const secondWords =["Corporation","Company","Partners","Agency", "Business",
"Agent","Team","Train","Crew","Squad"]
const randomNumber = Math.floor(Math.random() * 10) + 0

let startupName =firstWords[randomNumber] + secondWords[randomNumber]

console.log("The startup:" + startupName +" "+ startupName.length +" characters")