//The fastest presser in this realm

const input = document.getElementById('input');
const button = document.getElementById('btn');
const printL = document.getElementById('printL');
const printS = document.getElementById('printS');
const pressKey = document.querySelector('body');
let counterS = 0;
let counterL = 0;
const winnerMsg = document.getElementById('winner');
const restart = document.getElementById('restart');

//seconds counter
const timer = document.getElementById('timer');
const time = input.value;

// Function to show only press count of  specifice keys 'S' &'L' 
const printer = function (e) {
    if (e.key == 'l') {
        counterL++
        printL.innerText = counterL
    } else if (e.key == 's') {
        counterS++
        printS.innerText = counterS
    };
};
// function for getting value of input
const durationTime = function () {
    return input.value
};

// The main function that works when we click start game 
const game = function () {
    pressKey.addEventListener('keydown', printer);
    setTimeout(() => {
        //Here we remove, so player press can't count after time
        pressKey.removeEventListener('keydown', printer);
        if (counterL > counterS) {
            winnerMsg.innerText = 'Player L winner '
        } else if (counterS > counterL) {
            winnerMsg.innerText = 'Player S winner '
        } else if (counterL == 0 && counterS == 0) {
            winnerMsg.innerText = 'Hey... Lets play'
        } else {
            winnerMsg.innerText = ' Draw Game ..Try Again!'
        };
    }, 1000 * durationTime());
    let timeCounter = durationTime();

    const timerPrint = function () {
        console.log('hi');
        if (timeCounter >= 0) {
            timer.innerHTML = timeCounter
            timeCounter--;
        }
    }
    //im trying to stop counter after game end, but dosent success
    let interval = setInterval(timerPrint, 1000);

    if (timeCounter >= 0) {
        return interval
    } else { clearInterval(interval) }

}
button.addEventListener('click', game);

// restart game function 
const restartGame = function () {
    counterL = 0;
    counterS = 0;
    printL.innerText = counterL;
    printS.innerText = counterS;
    game();
};
restart.addEventListener('click', restartGame);






