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
*/
const button = document.getElementById('button')
let count=0;
//const div = document.getElementById('result').innerHTML=count

const add = setInterval(() => {
  // div.innerText=count
console.log(count);
    count ++
}, 500);
/*
setTimeout(() => {
    clearInterval(add)
console.log('yes');
},5000);
*/
