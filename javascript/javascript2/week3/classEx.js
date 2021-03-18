/*
const add =(number)=>{
 console.log('tillykke you diid'); 

};

function homeWorke(subj, callback){
    alert(`you finished ${subj} homeworke`)
    const numberF =(num)=>num+num;
    const number = numberF(5)
    callback(number)
};
homeWorke('math',add)

const button = document.getElementById('button')
let count=0;
//const div = document.getElementById('result').innerHTML=count

const add = setInterval(() => {
  // div.innerText=count
console.log(count);
    count ++
}, 500);

setTimeout(() => {
    clearInterval(add)
console.log('yes');
},5000);
*/
/////////////////////////////////////////////////////////
/*
const button1 = document.getElementById('btn1')
const button2 =document.getElementById('btn2')
const print =document.getElementById('print')
const delayMsg = setTimeout(() =>{
    console.log('This text was delayed by 3 seconds'); 
}, 3000)

button1.addEventListener('click',delayMsg)

*/

const body = document.querySelector('body')


const position = function (a) {
    const x = a.screenX
    const y = a.screenY
    setTimeout(() => {
       
    }, 3000);
    return x/y
}

body.addEventListener('mousemove', position)
///////////////////////////////////////////////////

//warm up exercise
//.1 