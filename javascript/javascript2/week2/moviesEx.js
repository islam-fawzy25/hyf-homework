
// Working with movies

//Movie with shortest title // Extra
const filter = movies.map(movie => movie.title.length);
//console.log(filter);
const shortestTitle = filter.reduce((sum, current) => (sum < current) ? sum : current);
const shortestTitleObj = movies.find(item => item.title.length == shortestTitle);
//console.log(shortestTitleObj);
//console.log(shortestTitle);

//Movie with longest title // Extra
const longestTitle = filter.reduce((sum, current) => (sum > current) ? sum : current);
//console.log(longestTitle);

// 1. //movies with a short title
const shortTitleMovies = movies.filter(title => (title.title.length >= 1 && title.title.length <= 2) ? true : false);
//console.log(shortTitleMovies);

// 2. //Movies with long title 
const longTitleMovies = movies.filter(title => (title.title.length >= 25) ? true : false);
//console.log(longTitleMovies);

// 3. //number of movies made between 1980-1989
const yearOfMadeMovies = movies.filter(movie => (movie.year >= 1980 && movie.year <= 1989));
console.log(yearOfMadeMovies);

// .4 //Rating array
const ratingMovies = movies.map(item => {
  if (item.rating >= 7) { item['tag'] = 'Good' }
  if (item.rating >= 4 && item.rating < 7) { item['tag'] = 'Average' }
  if (item.rating < 4) { item['tag'] = 'Bad' }
  return item.tag //
});
//console.log(ratingMovies);

// .5 // Use chaining  
const higherRatedMovies = movies.filter(movie => movie.rating > 6).map(movie => movie.rating);
//console.log(higherRatedMovies);

// .6 // Count condtional movies 
const keywords = { 'total': 0, 'Surfer': 0, 'Alien': 0, 'Benjamin': 0, '*batteries not included': 0 };
const findKeywords = movies.filter(movie => {
  if (movie.title in keywords) {
    keywords[movie.title]++
    keywords['total']++
  };
});
//console.log(keywords);

//.7 //  duplicated Movies
// first i used map to get array of movies titles 
const moviesTitles = movies.map(item => {
  const getSplitedTitle = item.title.split([' '])
  return getSplitedTitle
})
//console.log(moviesTitles);
//then i used this from stack overflow
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

// finally workes :) 
const duplicatedTitle = moviesTitles.filter(value => findDuplicates(value).length > 0);
//console.log(duplicatedTitle);

//8. // Calculatr the average rating 
const sumAverage = movies.reduce((total, value) => {
  if (value.tag == 'Average') { return total + 1 }
  return total
}, 0)
//console.log('Average movies = ' + sumAverage);

//9.// total number of Good, Average and Bad movies
const result = { goodMovies: 0, averageMovies: 0, badMovies: 0 };
const ratingCounter = movies.reduce((sum, item) => {
  if (item.tag == 'Bad') { return result.badMovies++ }
  if (item.tag == 'Average') { return result.averageMovies++ }
  if (item.tag == 'Good') { return result.goodMovies++ }
}, 0)
//console.log(result)


