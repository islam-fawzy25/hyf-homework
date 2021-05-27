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
  if (props.array.length === 0) {
    return <div> No Items </div>;
  } else {
    return null;
  }
};
// the main component for add and delete todo item
const ListedTodos = () => {
  const [array, setArray] = useState(todos);
  const [status, setStatus] = useState(false);

  //add todo function to execute modifying on todos array by useState
  const addTodo = () => {
    setArray((prev) => {
      return [...prev, { id: Date.now(), description: "Random text" }];
    });
  };
  // delete function execute filter todos array
  const deleteTodo = (props) => {
    setArray((items) => {
      return items.filter((item) => {
        return item.id !== props.id;
      });
    });
  };
  // add todo button component execute creat new todo item by button
  const AddTodoButton = () => {
    return (
      <div>
        <button onClick={addTodo}>Add Todo</button>
        <CheckTodoArray array={array} />
      </div>
    );
  };

  // checkbox function to check if it is checked it will change status and make through line
  // i did my best here and still need help it is not working 100% i know and i am sure i have to useEffect here but i can not do more 
  
  const changeTodoStatus = () => {
setStatus(!status)
  };

  return (
    <div>
      <AddTodoButton />
      <ul>
        {array.map((obj) => (
          <div key={obj.id}>
            <li>
              <label htmlFor="todoItem" style={{ 'textDecoration': status ? 'line-through':'none'   }}>
                {obj.description}
                <input
                  type="checkbox"
                  id="todoItem"
                  onChange={()=>{
                    changeTodoStatus()
                  }}
                />
              </label>
              <button
                onClick={() => {
                  deleteTodo(obj);
                }}
              >
                Delete
              </button>
            </li>
          </div>
        ))}
      </ul>
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
