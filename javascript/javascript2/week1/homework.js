// Homeworke js2/week1 
//Problem solving cardio
//Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function letters(danishWords) {
    const splitArr = danishWords.map(function (element, index, array) {
        return element.split('');
    });
    const gotArrLeng = splitArr.map(function (element, index, array) {
        return element.length
    });
    const shortestWord = Math.min(...gotArrLeng);
    const findShortestWord = gotArrLeng.indexOf(shortestWord);
    console.log(danishWords[findShortestWord]);
}; // returns 'ø'
letters(danishWords);

/*/////////////////////////////////////////////////////////////////////////////////////////////////////*/

//Find and count the Danish letters
//Find the individual number and the total number of Danish letters in a string.

const danishString = "Jeg har en blå bil";
function countLetter(danishString) {
    const danishStr = danishString.toLowerCase();
    const splitStr = danishStr.split('');
    const sumLetter = splitStr.filter(element => element === 'å');
    const letterApperance = { total: sumLetter.length, å: sumLetter.length };
    return console.log(letterApperance);
}; // returns {total: 1, å: 1}
countLetter(danishString);

const danishString2 = "Blå grød med røde bær";
function countLetters(danishString2) {
    const danishStr = danishString2.toLowerCase();
    const splitStr = danishStr.split('');

    const sumLetter1 = splitStr.filter(element => element === 'æ');
    const sumLetter2 = splitStr.filter(element => element === 'ø');
    const sumLetter3 = splitStr.filter(element => element === 'å');

    const letterApperance = {
        total: (sumLetter1.length + sumLetter2.length + sumLetter3.length)
        , æ: sumLetter1.length, ø: sumLetter2.length, å: sumLetter3.length
    };
    return console.log(letterApperance);
}; // returns {total: 4, æ: 1, ø: 2, å: 1}
countLetters(danishString2);

/**************************************************************************************/
//Spirit animal name generator
/*
'get username' source :http://www.learningaboutelectronics.com/Articles/
How-to-retrieve-data-from-a-text-box-in-javascript.php#:~:text=
To%20extract%20the%20information%20which,entered%20into%20this%20text%20box. 
'random number' source :https://gist.github.com/brunomonteiro3/27af6d18c2b0926cdd124220f83c474d
*/
const animalsNames = ['The loyal Dog', 'The lovely Cat', 'The brave Lion',
    'The crying butterfly', 'The fullmoon wolf.', 'The speedy horse',
    'The samrt frog', 'The kind rabbit', 'The bla bla mouse', 'The happy monkey '];

const newName = ['The sharpe egel', 'The big elephant', 'The amzing bird', 'The wonderful fish '];

const a = 0;
const b = animalsNames.length - 1;
const x = 0;
const y = newName.length - 1;
function formData() {
    const userName = document.getElementById('userName').value;
    const noUserName = document.getElementById('error');
    const randomNum = randomIntFromInterval(a, b);
    const printName = animalsNames[randomNum];
    if (userName == '' || userName == !String) {
        return noUserName.innerHTML = ' Please enter your name';
    };
    document.writeln('Name: ' + userName);
    document.writeln('- ' + printName);
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    randomIntFromInterval(a, b);
};

function spiritAnimal() {
    const userName = document.getElementById('userName').value;
    const noUserName = document.getElementById('error');
    const randomNum = randomNames(x, y);
    const printName = newName[randomNum];
    if (userName == '' || userName == !String) {
        return noUserName.innerHTML = ' Please enter your name';
    };
    document.writeln('Name: ' + userName);
    document.writeln('- ' + printName);
    function randomNames(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    randomNames(x, y);
};
