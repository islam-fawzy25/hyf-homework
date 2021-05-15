const express = require("express");
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

//Multiplication
router.get("/multiply", (req, res) => {
  const first = Object(req.query).firstParam;
  const second = Object(req.query).secondParam;
  let firstParam = 0;
  let secondParam = 0;
  if (first.length > 1) {
    firstParam = first
      .map((item) => parseInt(item))
      .reduce((acc, value) => {
        return acc + value;
      });
  } else {
    firstParam = parseInt(first);
  }
  if (second.length > 1) {
    secondParam = second
      .map((item) => parseInt(item))
      .reduce((acc, value) => {
        return acc + value;
      });
    secondParam;
  } else {
    secondParam = parseInt(second);
  }
  if (isNaN(firstParam) || isNaN(secondParam)) {
    return res
      .status(400)
      .send({ Error: "First Param and Second Param must be numbers" });
  } else {
    res.send(`Multiplication of request = ${firstParam * secondParam} `);
  }
});

// Addition
router.get("/add", (req, res) => {
  const first = Object(req.query).firstParam;
  const second = Object(req.query).secondParam;
  let firstParam = 0;
  let secondParam = 0;
  if (first.length > 1) {
    firstParam = first
      .map((item) => parseInt(item))
      .reduce((acc, value) => {
        return acc + value;
      });
  } else {
    firstParam = parseInt(first);
  }
  if (second.length > 1) {
    secondParam = second
      .map((item) => parseInt(item))
      .reduce((acc, value) => {
        return acc + value;
      });
    secondParam;
  } else {
    secondParam = parseInt(second);
  }
  if (isNaN(firstParam) || isNaN(secondParam)) {
    return res
      .status(400)
      .send({ Error: "First Param and Second Param must be numbers" });
  } else {
    res.send(`Addition of request = ${firstParam + secondParam} `);
  }
});

// i got undefined wit req.body and i do not know where is the problem 
router.post("/multiply",async (req, res) => {
  console.log("hi ");
  console.log(req.body);
  res.json(`request ${parseInt(req.body)} `);
});

module.exports = router;
