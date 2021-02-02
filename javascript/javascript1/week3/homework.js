//Item array removal
/* for .splice link 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  // Write some code here
for (let i = 0; i < names.length; i++) {
    if(nameToRemove === names[i]){
        
        names.splice(names.indexOf (nameToRemove),1)
        break
    }
}


// Code done
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


//When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };


//console.log(travelResult);
// console.log(travel);

  function timeOfTravel(){
    let travelResult = travelInformation.destinationDistance / travelInformation.speed ;
    let travelHistory = travelResult +'';
    let travel = new Array();
    travel = travelHistory.split('.');

    let  minutesCalculation = travel[1] *60/100;
     travelTime= travel[0]+ ' hours '+ minutesCalculation +' minutes'

  };

  timeOfTravel(travelInformation);

 // const travelTime = x(travelInformation);
  console.log(travelTime); // 4 hours and 42 minutes

  // Series duration of my life


  const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];

  let seriesName = '';
 
// average lifespan of 80 years.

  function logOutSeriesText(seriesName) {
    // write code here

    for(i=0;i<seriesDurations.length;i++){
     // console.log(seriesDurations[i].title)
      if(seriesDurations[i].title==seriesName){

      let hoursCalculation =(seriesDurations[i].hours +(seriesDurations[i].minutes /60))
      let  daysCalculation = seriesDurations[i].days  + (hoursCalculation/24 ) ;
      
      let seriesTimeOfLife=((daysCalculation/365 ) /80)*100
      let percentageSeriesTimeOfLife = seriesTimeOfLife.toFixed(3)+' %'

          console.log(seriesName +' took '+ percentageSeriesTimeOfLife +' of my life ')
      }
      
       }   
  }
  logOutSeriesText('Game of thrones');
  logOutSeriesText('Sopranos');
  logOutSeriesText('The Wire'); // logs out the text found above


  