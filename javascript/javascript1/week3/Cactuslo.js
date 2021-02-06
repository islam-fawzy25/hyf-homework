//Adding an activity
let activities = [];
let  totalDurationActivities=0;
var today  = new Date().toLocaleDateString("en-UE");

function addActivity(date , activity , duration){
activities.push({date , activity , duration});
//date = today.toLocaleDateString("en-UE");
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
   statusForLoop = 'You have added '+activities.length +' activities.They amount to '+totalDurationActivities + ' min.of usage.';

   //Usage limit
   if(totalDurationActivities>=100){
    statusIf = 'You have reached your limit,no more smartphoning for you!'
   }
 }
    console.log(statusForLoop);
    console.log(statusIf);
    return
}

showStatus(activities);

