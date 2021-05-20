import "./App.css";
import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoTable, { Header } from "./dash";

const randomNumber = Math.floor(Math.random() * 6);
const moment = require("moment");

let todoList = [
  {
    todoItem: "HYF Homework",
    description:
      "work on implementation weekly homework to learn something new",
    deadlineDate: moment().add(randomNumber, "days").format("llll"),
  },
  {
    todoItem: "Shopping",
    description: "I have to buy headphone and new mobile ",
    deadlineDate: moment().format("llll"),
  },
  {
    todoItem: "Wash clothes",
    description:
      "i have to take all dirty colthes and wash it by washing mashine",
    deadlineDate: moment().add(3, "days").format("llll"),
  },
  {
    todoItem: "Iron clothes",
    description: "i have to take clean clothes and iron it ",
    deadlineDate: moment().add(1, "days").format("llll"),
  },
  {
    todoItem: "playing sports",
    description: "I am getting too fat i have to lose 1oo KG",
    deadlineDate: moment().subtract(3, "days").format("llll"),
  },
  {
    todoItem: "Learn something new",
    description:
      "Looking for something new like place , program , language or activity",
    deadlineDate: moment().add(randomNumber, "days").format("llll"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <TodoTable todoData={todoList} />
    </div>
  );
}

export default App;
