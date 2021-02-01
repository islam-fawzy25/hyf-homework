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

  let travelResult = travelInformation.destinationDistance / travelInformation.speed ;
  let travelHistory = travelResult +'';
  let travel = new Array();
  travel = travelHistory.split('.');
//console.log(travelResult);
// console.log(travel);

  function x(){
   
if(travel.length=2){
let  z = travel[1] *60/100
  return travelTime= travel[0]+ ' hours '+ z +' minutes'
}else{
   return travelTime = travel[0]+ ' hours '
}

  };

  x(travelInformation);

 // const travelTime = x(travelInformation);
  console.log(travelTime); // 4 hours and 42 minutes


