const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

//Respond with the json for all the reservations
router.get("/", async (request, response) => {
  try {
    response.send(reservations);
  
  } catch (error) {
    throw error;
  }
});

//Respond with the json for the meal with the corresponding id
router.get("/:id", async (request, response) => {
  const id = parseInt(request.params.id);

  try {
    response.send(reservations[id-1]);
  } catch (error) {
    throw error;
  }
});

module.exports = router;