const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

//Respond with the json for all the meals
router.get("/", async (request, response) => {
  let filteredMeals = meals;

  try {
    // implementation of filtered meals with  Max pric
    if ("maxPrice" in request.query) {
      const maxPrice = parseInt(request.query.maxPrice);
      if (isNaN(maxPrice)) {
        return response
          .status(400)
          .send({ error: "Max Price must be integers" });
      }
      filteredMeals = filteredMeals.filter((meal) => meal.price <= maxPrice);
    }

    // implementation of filtered meals with  title
    if ("title" in request.query) {
      const title = request.query.title.toLowerCase();
      console.log(title);
      filteredMeals = filteredMeals.filter((meal) => {
        return meal.title.toLocaleLowerCase().includes(title);
      });
    }

    // implementation of filtered meals with  date
    if('createdAfter' in request.query){
   const createdAfter = parseInt(request.query.createdAfter ) 
if(isNaN(createdAfter)){
return response.status(400).send('Date must be integer')
}
filteredMeals = filteredMeals.filter(meal=>{
  return meal.createdAt == createdAfter
})
    }

        // implementation of filtered meals with  limit

if('limit' in request.query){
const limit = parseInt(request.query.limit)

if(isNaN(limit)){
  return response.status(400).send('Limit must be integer')
}

filteredMeals.length = limit


}

    response.json(filteredMeals);
    //console.log(meals);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});

//Respond with the json for the meal with the corresponding id
router.get("/:id", (request, response) => {
  const id = parseInt(request.params.id);
  if (isNaN(id)) {
    return response.status(400).json({ error: "IDs must be integer" });
  } else {
    response.json(meals[id - 1]);
  }
});

module.exports = router;
