
//Home work week2 //Exercise2 //Event application

/* i found this get day date  info in at this page
 "https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript"
 i tried to make it simple

*/

const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',  'Sunday']  

var today = new Date();
var dd = Number today.getDate()).padStart(2, '0');

function getEventWeekday(newDate){
   return weekdays [(dd+ newDate)%7] ;
}

console.log(getEventWeekday(1));
console.log(getEventWeekday(18));


