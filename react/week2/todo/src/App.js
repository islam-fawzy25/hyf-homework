import "./App.css";
import React, { useState, useEffect } from "react";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

const Header = () => {
  return <h1> Todo List</h1>;
};

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((timer) => timer + 1);
    }, 1000);
  });
  return <h3>You have used {count} seconds on this website</h3>;
};
// component to check the todos array when it is empty render a message
const CheckTodoArray = (props) => {
  if (props.todosArray.length === 0) {
    return <div> No Items </div>;
  } else {
    return null;
  }
};
// the main component for add and delete todo item
const ListedTodos = () => {
  const [todosArray, setTodosArray] = useState(todos);

  //add todo function to execute modifying on todos array by useState
  const addTodo = () => {
    setTodosArray((prev) => {
      return [...prev, { id: Date.now(), description: "Random text" }];
    });
  };

  // delete function execute filter todos array
  const deleteTodo = (props) => {
    setTodosArray((todos) => {
      return todos.filter((todo) => {
        return todo.id !== props.todosItems.id;
      });
    });
  };
  // add todo button component execute creat new todo item by button
  const AddTodoButton = () => {
    return (
      <div>
        <button onClick={addTodo}>Add Todo</button>
        <CheckTodoArray todosArray={todosArray} />
      </div>
    );
  };
  // Render todos tasks it will render all tasks in todos array and check todos status  if it's done or not
  const RenderTodosTasks = (props) => {
    const [status, setStatus] = useState(false);
    const [todosArray, setTodosArray] = useState(todos);
    // checkbox function to check if it is checked it will change status 
    //and make through line and change done state of checked todo
    const changeTodoStatus = (props) => {
      setStatus(!status);
      setTodosArray((todos) => {
        todos.map((todo) => {
          if (todo.id === props.todosItems.id) {
            return todo.done=! status;
          }
        });
      });
    };
    return (
      <div>
        <li>
          <label
            htmlFor="todoItem"
            style={{ textDecoration: status ? "line-through" : "none" }}
          >
            {props.todosItems.description}
            <input
              type="checkbox"
              id="todoItem"
              onChange={() => {
                changeTodoStatus(props);
              }}
              key={props.id}
            />
            <button
              onClick={() => {
                deleteTodo(props);
              }}
            >
              Delete
            </button>
          </label>
        </li>
      </div>
    );
  };

  return (
    <div>
      <AddTodoButton />
      {todosArray.map((todo) => {
        return (
          <div key={todo.id}>
            <RenderTodosTasks todosItems={todo} />
          </div>
        );
      })}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <ListedTodos />
    </div>
  );
}

export default App;
