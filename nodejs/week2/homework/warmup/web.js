const express = require('express')

const router = express.Router()

router.get("/add", (req, res) => {
  const first = parseInt(req.query.first);
  const second = parseInt(req.query.second);
  if ("first" && "second" in req.query) {
   return res.send(`Sum of request = ${first+second}`);
  }

});


router.get("/multiply/:first/:second", (req, res) => {
    const first = parseInt(req.params.first);
    const second = parseInt(req.params.second);
    
   res.send(`Multiply of request = ${first*second}`)
  });


module.exports = router


