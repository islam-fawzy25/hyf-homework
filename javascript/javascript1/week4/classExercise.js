/*
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// https://www.mathsisfun.com/numbers/fibonacci-sequence.html
function fibonacci(index){
if(index < 0){
return ' index needs to be >=0'
}
if (index < 2){
return index
}
const sequence =[0,1]
    for(i=2; i<=index;++i) {
    sequence[i]=sequence[i-1]+sequence[i-2] 
    
    }
    
return sequence[index]
}

const result= fibonacci(15)
console.log(result)
*/

/*

const formattedCreditCardObject = formatCreditCardNumber(123456789);
//console.log(formattedCreditCardObject);
function formatCreditCardNumber(index){
    
    
    const index1 = index+''
   
    const arr = [];

    newArr = index1.split('')
    console.log(newArr)
segment=[]
for (i=0; i< newArr.length ; i++){
if(i %4 ===3){
    segment.push(i)

}
}
   console.log(segment)
return 
}
//console.log(arr)
/*
// From Islam
function formatCreditCardNumber(index){
    const index1 = index+'';
    const arr = [];
   
    newArr = index1.split('')

   console.log(newArr)
}
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/


//homework
/*
const userEnterQ = 'Waht is my name ?';
const userArray =[];
const userEnterName ='Hello,my name is '

  function getReply(command){ 

      const splitCommand = command.split(' ');
      console.log(splitCommand)
      if( splitCommand.includes(userEnterName)){ 
         return 'yes name'
      }
      if(  splitCommand[4] === '' || splitCommand[4] === undefined ){
      console.log(splitCommand[4])
      return 'Name has not yet been mentioned'
    }
  
   for(i=0 ; i<userArray.length ; i++){
       if(splitCommand[4] = userArray[i].name.includes(userName)){ 
       return userName +' is already on the system  '
       }
   }

  if (userArray ) {
       userName = splitCommand[4]
       userArray.push({name : userName})
       console.log(userArray)
       return  'Nice to meet you '+ userName
    }else if ( splitCommand.includes( userEnterQ)){
        return 'yes '
     }
//return userArray
}
*/ 

