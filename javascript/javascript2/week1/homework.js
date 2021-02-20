// Homeworke js2/week1 
//Problem solving cardio
//Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const reducer = (shortestWord, currentWord) => currentWord.length < shortestWord.length || shortestWord.length === 0 ? currentWord : shortestWord;

console.log(danishWords.reduce(reducer, ""));// "ø" 

/*/////////////////////////////////////////////////////////////////////////////////////////////////////*/

//Find and count the Danish letters
//Find the individual number and the total number of Danish letters in a string.

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function countLetter(danishString) {
    const danishLetters = { 'total': 0, "æ": 0, "ø": 0, "å": 0 };
    const danishStr = danishString.toLowerCase();
    const splitStr = danishStr.split('');

    splitStr.map(function (elem) {
        if (elem in danishLetters) {
            danishLetters[elem]++;
            danishLetters['total']++;
        }
    });
    return console.log(danishLetters);
}
countLetter(danishString)

countLetter(danishString2)

/*
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

const minAnimalsNames = 0;
const maxAnimalsNames = animalsNames.length - 1;
const minNames = 0;
const maxNames = newName.length - 1;
function formData() {
    const userName = document.getElementById('userName').value;
    const errorElement = document.getElementById('error');
    const randomNum = getRandomIntFromInterval(minAnimalsNames, maxAnimalsNames);
    const printName = animalsNames[randomNum];
    if (userName == '' || userName == !String) {
        return errorElement.innerHTML = ' Please enter your name';
    };
    document.writeln('Name: ' + userName);
    document.writeln('- ' + printName);
    function getRandomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
};

function spiritAnimal() {
    const userName = document.getElementById('userName').value;
    const errorElement = document.getElementById('error');
    const randomNum = getRandomIntFromInterval(minNames, maxNames);
    const printName = newName[randomNum];
    if (userName == '' || userName == !String) {
        return errorElement.innerHTML = ' Please enter your name';
    };
    document.writeln('Name: ' + userName);
    document.writeln('- ' + printName);
    function getRandomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
};
