const express = require("express");
const app = express();
 const routerNumbers = require('./web')

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.use('/numbers',routerNumbers)





app.listen(3000, () => console.log(`Calculator:listening on port 3000`));