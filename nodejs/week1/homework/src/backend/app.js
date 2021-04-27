const { response } = require("express");
const express = require("express");
const app = express();


// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews.json");
const reservations = require("./data/reservations.json");


// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});


// Respons all meals and includes review it matching eachmeal
const renderMeals = meals.map (item=>{
  item.reviews = reviews.filter (obj=> obj.mealId === item.id)
  return item
})

app.get("/meals", function (request, response) {
  response.send(renderMeals);
});


// Respond cheap meal with (including it's reviews)
const cheapMeals = meals.filter(item => {
 item.review = reviews.filter(obj => obj.mealId === item.id);
  return item.price < 60;
});
app.get("/cheap-meals", function (request, response) {  
  response.send(cheapMeals);
});


// Respond large meal with (including it's reviews)
const largeMeals = meals.filter(item=>{
  item.review = reviews.filter(obj => obj.mealId === item.id);
  return item.maxNumberOfGuests >5
})
app.get("/large-meals", function (request, response) {
  response.send(largeMeals);
});


//Respond random meal with (including it's reviews)
app.get("/meal", function (request, response) {
  response.send(renderMeals[Math.floor(Math.random() * meals.length)]);
});


//Respond All reservation
app.get("/reservations", function (request, response) {
  response.send(reservations);
});


//Respond random reservation
app.get("/reservation", function (request, response) {
  const randomNumber = Math.floor(Math.random() * reservations.length);
  response.send(reservations[randomNumber]);
});


module.exports = app;
