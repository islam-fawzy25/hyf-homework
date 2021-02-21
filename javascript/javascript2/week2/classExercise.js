const mentors = [
    { "name": "Abed Sujan", "subjects": ['JS', 'HTML', 'CSS', 'NODEJS'], yearOfExperience: 4},
    { "name": "Ahmed Magdy", "subjects": ['JS', 'Database', 'CSS'], yearOfExperience: 1},
    { "name": "Alicia Gonzales", "subjects": ['DB', 'HTML', 'NODEJS'], yearOfExperience: 8},
    { "name": "allan Thraen", "subjects": ['REACT', 'HTML', 'CSS'], yearOfExperience: 3},
    { "name": "Anders Ravn", "subjects": ['JS', 'HTML', 'NODEJS'], yearOfExperience: 2},
    { "name": "Daniel Fernandes", "subjects": ['Database', 'HTML', 'CSS'], yearOfExperience: 9}
];

console.log(mentors);
/*

// We are mapping/transforming the mentors array. Same size, different items.
const mentorNames = mentors.map(function(mentor) {
    return mentor.name;
});
console.log(mentorNames);

const mentorNamesFormatted = mentors.map(function(mentor) {
    return 'Mentors name is: ' + mentor.name;
});
console.log(mentorNamesFormatted);

const mentorSummary = mentors.map(function(mentor) {
    return `Mentors name is: ${mentor.name}. He has ${mentor.yearOfExperience} years of experience`;
});
console.log(mentorSummary);
*/
// We are mapping/transforming the mentors array. Same size, different items.
const experiencedMentors = mentors.filter(function(mentor) {
        
        return     mentor['yearOfExperience' ] >7


        console.log(mentor['yearOfExperience']>7); 
    }) 

   /* // can also be written as
     mentor.yearOfExperience > 7 
    return console.log(mentor);
*/
    // Explain why!
console.log(experiencedMentors);

// Get help from students to write this
const mentorsThatStartWithA = mentors.filter(function(mentor) {
    return mentor.name[0] == 'A'; // Missing Allan, why?? lowercase
});



console.log(mentorsThatStartWithA);

function filterMentorList(courseID) {
    const resultHtml = document.getElementById('result');

    let listHtml = '';
    listHtml += '<div> Fowad</div>';
    listHtml += '<div> Susane</div>';
    listHtml += '<div> Sara</div>';
    resultHtml.innerHTML = listHtml;
    
    console.log('courseID', courseID);
}
 //filterMentorList()

 let modifiedMentors = mentors.map(function(mentor) {

    mentor.name = (mentor["name"].length >10)? "Mr "+ mentor.name: "Ms " + mentor.name;

    mentor.age = mentor["name"].length;
    // if(mentor["name"].length >10)
    // mentor.name = "Mr " + mentor.name;
    // else 
    // mentor.name = "Ms " + mentor.name;
    
    return mentor;

});


console.log(modifiedMentors)




function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomIntFromInterval(2,10))




























/*
// Warmup array exercises

// Doubling of number

const  numbers = [1, 2, 3, 4];
const oddNumber = numbers.filter( elem => elem % 2); // filter even numbers 

const doubbeledNumbers = oddNumber.map(elem => elem *2); // take odd numbers and doubbling it 

console.log( 'The doubled numbers are ',doubbeledNumbers);


// Working with movies
const movies = [{"title": "'71","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940},
{"title": "'A' gai wak","year": 1983,"rating": 7.4,"votes": 11942,"running_times": 6300}];
console.log(movies)
//const reducer = (shortestTitle,currentTitle) => 
const reducer = (shortestWord, currentWord) => currentWord.length < shortestWord.length || shortestWord.length === 0 ? currentWord : shortestWord;
console.log(movies.reduce(reducer, ""));// "ø" 
const longestTitle = movies.reduce(function(sum,order){
    order.title.length > sum ? order.title : sum
    console.log(order)

},'')
*/



