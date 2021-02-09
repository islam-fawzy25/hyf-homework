/*
Hello my name is Benjamin - Should save the name benjamin.
 and respond with "nice to meet you Benjamin". 
 What if someone writes this twice?
What is my name - should respond with the name of the person.
 What if the name has not yet been mentioned?
*/ 


 const nameArr=[];
 const myTodo =[];
  function getReply(command){ 

    const splitCommand = command.split(' ');
    const userName = splitCommand[4]

      
      if(command.startsWith('Hello my name is')){
        if ( splitCommand[4]== ''|| splitCommand[4] ==undefined){
          return ' Your name has not yet  been  mentioned '
       }
        if (nameArr.includes(userName)){
         return ' you already on the system '+ userName 
        }
        nameArr.push(userName)
       return 'nice to meet you '+userName
      }
      console.log(nameArr)

      if(command.startsWith('What is my name?')){
         return ' Your name is '+ nameArr[0]
      }
      if(command.startsWith('Add') && command.includes('to my todo')){
        splitCommand.splice(0,1);
        splitCommand.splice(splitCommand.length-3,3)
        myTodo.push(splitCommand)
        console.log(myTodo)


      }
  }

  console.log(getReply("Hello my name is islam")); // "Nice to meet you benjamin"
  console.log(getReply("Hello my name is islam")); // "Nice to meet you benjamin"
  console.log(getReply("Hello my name is ")); // "Nice to meet you benjamin"
  console.log(getReply("What is my name?")); // "Your name is Benjamin"
  console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
  console.log(getReply("Add singing in the shower to my todo")); // "fishing added to your todo"
