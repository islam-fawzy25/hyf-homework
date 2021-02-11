//Hi, i know ther is some lines i can be manimized or i repeated , i will try to do that next few days , Thanks    

 const nameArr=[];
 const myTodo =[];

  function getReply(command){ 
    const splitCommand = command.split(' ');
    const userName = splitCommand[4];
    const myTodoIs =myTodo.join();

      // if statment for checking and resturn the user name :
      if(command.startsWith('Hello my name is')){
        if ( splitCommand[4]== ''|| splitCommand[4] ==undefined){
          return ' Your name has not yet  been  mentioned ';
       };

        if (nameArr.includes(userName)){
         return ' you already on the system '+ userName ;
        };
        nameArr.push(userName)
       return 'nice to meet you '+userName;
      };

      if(command.startsWith('What') && command.endsWith('name?')){

        return ' Your name is '+ nameArr[0];
      };

       //my todo part : 
      // if statment for adding 
      if(command.startsWith('Add') && command.endsWith('todo')){
        splitCommand.splice(0,1);
        splitCommand.splice(splitCommand.length-3,3);

        return   myTodo.push(splitCommand.join(' '));
      };
      // removing part:
      if(command.startsWith('Remove') && command.endsWith('todo')){
        splitCommand.splice(0,1);
        splitCommand.splice(splitCommand.length-3,3);

        // here also it did not join the array
         const removeCommand = splitCommand.join(' ')

         if(myTodo.includes(removeCommand)){

           return myTodo.splice(myTodo.indexOf(removeCommand),1)
         }
        return myTodoIs
         };

         // return in my todo
         if(command === 'What  is on my todo?'){
          return 'You have '+ myTodo.length + ' todos '+myTodo
         } ;

       // here implement date of today 
       if(command === 'What day is it today?'){
       // i copied from : stack overflow  website and i removed few lines related to hours
       /*
       var objToday = new Date(),
	
        domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
        dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear(),
        curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
      var today =     dayOfMonth + " of " + curMonth +' '+ curYear;
      */
     // so i think this one better and my brain working good now :D
     const n = new Date();
     const dd = n.getDate();
     const mm = n.getMonth ();
     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

     const yy = n.getUTCFullYear() ;
     const today = dd +' '+ months[mm]  +' '+ yy ;
       return 'Today is: ' +today;
       };
/*
    // implement simple math operation 
       if(splitCommand[3]=== '+'){
        // found this function on :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
       // it is converting string to number 
        function filterInt(value) {
          if (/^[-+]?(\d+|Infinity)$/.test(value)) {
            return Number(value) ;
          } else {
            return NaN ;
          }
        }
       const a = filterInt(splitCommand[2]);              
       const b = filterInt(splitCommand[4]);               
       return     a+b ;
       };

       if(splitCommand[3]=== '*'){
        function filterInt(value) {
          if (/^[-+]?(\d+|Infinity)$/.test(value)) {
            return Number(value) ;
          } else {
            return NaN ;
          }
        }
       const a = filterInt(splitCommand[2]);
       const b = filterInt(splitCommand[4]);      
       return      a*b ;
       };
   */
if(splitCommand.includes('*')||splitCommand.includes('+')||splitCommand.includes('/')||splitCommand.includes('-')){
   splitCommand.splice(0,2)
  const calculationReady = splitCommand.join('')
  return      eval(calculationReady)

}

    };
    // Timer for 4 minutes 
    setTimeout(function(){ alert("Timer done"); }, 1000*60*4);




  console.log(getReply("Hello my name is islam")); 
  console.log(getReply("Hello my name is islam")); 
  console.log(getReply("Hello my name is ")); 
  console.log(getReply("What is my name?")); 
  console.log(getReply("Add fishing to my todo")); 
  console.log(getReply("Add singing in the shower to my todo")); 

   //console.log(getReply("Remove singing in the shower from my todo")); 
   console.log(getReply("Remove fishing from my todo")); 
 
  console.log(getReply("What  is on my todo?")); 
  console.log(getReply("What day is it today?")); 
  console.log(getReply("what is 3 + 3")); 
  console.log(getReply("what is 4 * 12")); 
  console.log(getReply("what is 50 - 12")); 
  console.log(getReply("what is 500 / 10")); 

