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

   names.splice(names.indexOf (nameToRemove),1)

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

  function timeOfTravel(){
    const travelResult = travelInformation.destinationDistance / travelInformation.speed ;
    const travelHistory = travelResult +'';
    const travel = travelHistory.split('.');
    const  minutesCalculation = travel[1] *60/100;
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

// average lifespan of 80 years.

  function logOutSeriesText() {
    // write code here
let sum =0 ;
    for(i=0;i<seriesDurations.length;i++){
     
      seriesName = seriesDurations[i].title
      const hoursCalculation =(seriesDurations[i].hours +(seriesDurations[i].minutes /60)) ;
      const   daysCalculation = seriesDurations[i].days  + (hoursCalculation/24 ) ;
      const  seriesTimeOfLife=((daysCalculation/365 ) /80)*100 ;
      sum += seriesTimeOfLife
// add sum befor .toFixed because it´s convert number to string and used brevious variable
       const  percentageSeriesTimeOfLife = seriesTimeOfLife.toFixed(3) ;

       //totalTime += percentageSeriesTimeOfLife ;
       console.log(seriesName +' took '+ percentageSeriesTimeOfLife +' % '+ 'of my life ');
      }  
   console.log('In total that is '+ sum +' % of my life ')
  };

       logOutSeriesText()
