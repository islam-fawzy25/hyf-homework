// Homeworke js2/week1 
//Problem solving cardio
//Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function letters(danishWords) {
    const splitArr = danishWords.map(function (element, index, array) {
        return element.split('')
    })
    console.log(splitArr)
    const gotArrLeng = splitArr.map(function (element, index, array) {
        return element.length
    })
    console.log(gotArrLeng)
    const shortestWord = Math.min(...gotArrLeng);
    const findShortestWord = gotArrLeng.indexOf(shortestWord)
    console.log(danishWords[findShortestWord])
}; // returns 'ø'
letters(danishWords)

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
countLetters(danishString2)

/**************************************************************************************/
//Spirit animal name generator
// source :http://www.learningaboutelectronics.com/Articles/How-to-retrieve-data-from-a-text-box-in-javascript.php#:~:text=To%20extract%20the%20information%20which,entered%20into%20this%20text%20box.
const animalsNames = ['Wolf', 'Dog', 'Cat', 'Lion']
const a = 0;
const b = animalsNames.length - 1;
function formData() {
    const userName1 = document.getElementById('userName').value;
    document.writeln(userName1 +  animalsNames)   
}

formData()
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
 const randomNum =randomIntFromInterval(a,b) ;
randomIntFromInterval(a, b)
 console.log(animalsNames[randomNum] )

/*
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const kk = randomIntFromInterval(0, 4)

console.log(kk)
console.log(animalsNames[kk])

*/
