//The fastest presser in this realm


const input = document.getElementById('input');
const button = document.getElementById('btn');
const printL = document.getElementById('printL');
const printS = document.getElementById('printS');
const pressKey = document.querySelector('body');
let counterS = 0;
let counterL = 0;
const winnerMsg = document.getElementById('winner');

const printer = function (e) {
    if (e.key == 'l') {
        counterL++
        printL.innerText = counterL
    } else if (e.key == 's') {
        counterS++
        printS.innerText = counterS
    };
};

const durationTime = function () {
    return input.value
};

button.addEventListener('click', function () {
    pressKey.addEventListener('keydown', printer);
    const time = setTimeout(() => {
        pressKey.removeEventListener('keydown', printer);
        if (counterL > counterS) {
            winnerMsg.innerText = 'Player L winner '
        } else if(counterS >counterL){ 
            winnerMsg.innerText = 'Player S winner ' 
        }else if(counterL ==0 && counterS ==0 ){
            winnerMsg.innerText='Hey... Lets play'
        }else{
            winnerMsg.innerText='WOoOw .. Drawing ..Try Again!'
        };
    }, 1000 * durationTime());
});




