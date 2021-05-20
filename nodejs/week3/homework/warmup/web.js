const express = require("express");
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

//Multiplication
router.get("/multiply", async (req, res) => {
  try {
    const queryObj = Object.values(req.query);
    const convertedValues = queryObj.flat().map((item) => parseInt(item));
    const result = convertedValues.reduce((acc, value) => {
      return acc * value;
    }, 1);
    isNaN(result)
      ? res.status(404).send(" Params must be numbers")
      : res.send(`Multiplication of request = ${result} `);
  } catch (error) {
    error;
  }
});
// Addition
router.get("/add", async (req, res) => {
  try {
    const queryObj = Object.values(req.query);
    const convertedValues = queryObj.flat().map((item) => parseInt(item));
    const result = convertedValues.reduce((acc, value) => {
      return acc + value;
    }, 0);
    isNaN(result)
      ? res.status(404).send(" Params must be numbers")
      : res.send(`Addition of request = ${result} `);
  } catch (error) {
    error;
  }
});
// post
router.post("/multiply", async (req, res) => {
  try {
    const queryObj = Object.values(req.query);
    const convertedValues = queryObj.flat().map((item) => parseInt(item));
    const result = convertedValues.reduce((acc, value) => {
      return acc * value;
    }, 1);
    isNaN(result)
      ? res.status(404).send(" Params must be numbers")
      : res.send(`Multiplication of request = ${result} `);
  } catch (error) {
    error;
  }
});

module.exports = router;
