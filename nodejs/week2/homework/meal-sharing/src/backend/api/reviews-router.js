const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

//Respond with the json for all the reviews
router.get("/", async (request, response) => {
  try {
    response.send(reviews);

  } catch (error) {
    throw error;
  }
});

//Respond with the json for the review with the corresponding id
router.get("/:id", async (request, response) => {
  const id = parseInt(request.params.id);
 
  try {
    response.send(reviews[id-1]);
  } catch (error) {
    throw error;
  }
});

module.exports = router;