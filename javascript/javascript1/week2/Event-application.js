
//Home work week2 //Exercise2 //Event application

//i tried to make it simple 

const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',  'Sunday']
//const today = weekdays[6]

function getEventWeekday(newDate){
  
    return weekdays [(newDate-1)%7] ;
}

console.log(getEventWeekday(5));
console.log(getEventWeekday(15));


