const express = require('express')

const router = express.Router()

router.get("/add", (req, res) => {
  const first = parseInt(req.query.first);
  const second = parseInt(req.query.second);
  if ("first" && "second" in req.query) {
    if(isNaN(first)||isNaN(second)){ 
      return res.status(400).send({Error:'First and Second must be numbers'})
    }
   return res.send(`Sum of request = ${first+second}`);
  }

});


router.get("/multiply/:first/:second", (req, res) => {
    const first = parseInt(req.params.first);
    const second = parseInt(req.params.second);
    if(isNaN(first)||isNaN(second)){
      return res.status(400).send({Error:'First and Second must be numbers'})
    }else{   res.send(`Multiply of request = ${first*second}`)
  }
  });


module.exports = router


