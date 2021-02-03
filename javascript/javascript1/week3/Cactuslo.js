//Adding an activity
let activities = [];
let  totalDurationActivities=0;
var today  = new Date();

function addActivity(date , activity , duration){
activities.push({date , activity , duration});
date = today.toLocaleDateString("en-US");


};
addActivity(today, "Youtube", 30);
addActivity("24/7-18", "Facebook", 30);
addActivity("25/7-18", "Instgram", 18);
addActivity("25/7-18", "Twitter", 25);

console.log(activities)

//Show my status

function showStatus(){
for(i in activities){
   totalDurationActivities += activities[i].duration ;
   status = 'You have added '+activities.length +' activities.They amount to '+totalDurationActivities + ' min.og usage.';

   //Usage limit

}if(totalDurationActivities>=100){
    status = 'You have reached your limit,no more smartphoning for you!'
}
console.log(status);
return

}
showStatus(activities);

