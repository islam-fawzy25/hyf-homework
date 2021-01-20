  // Home work


// Age-ify (A future age calculator) 

const yearOfBirth = 1987
const yearFuture = 2027
const age = yearFuture-yearOfBirth

console.log('You will be',(age),'years old in 2027')

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;

const shouldShowResultInDogYears  = true;

let dogYear;


if(shouldShowResultInDogYears){dogYear = (dogYearFuture - dogYearOfBirth)* 7;}
else{dogYear = dogYearFuture - dogYearOfBirth;}
console.log(dogYear);

