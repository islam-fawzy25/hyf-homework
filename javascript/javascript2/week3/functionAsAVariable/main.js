//Function as a variable
//1.
const array = [
     function1 = () => console.log('function1 called ')
    ,function2 = () => console.log('function2 called ')
    , function3 = () => console.log('function3 called ') 
];
array.forEach(item => item() );

//2.
const constFunction = function(){ console.log('This const function');};
function normalFunction(){console.log('This is normal function');};

constFunction();
normalFunction();

//3.
const object ={key:function(){console.log('function called inside object');}}
object.key()