const express = require("express");
const app = express();

const routerNumbers = require("./web");

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.use("/calculator", routerNumbers);

//parse URL- encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// router.use("/calculator", routerNumbers);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
