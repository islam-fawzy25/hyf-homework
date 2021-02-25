// Warmup array exercises

// Doubling of number
const numbers = [1, 2, 3, 4];
const oddNumber = numbers.filter(elem => elem % 2); // filter even numbers 
const doubbeledNumbers = oddNumber.map(elem => elem * 2); // take odd numbers and doubbling it 

console.log( 'The doubled numbers are ',doubbeledNumbers);
