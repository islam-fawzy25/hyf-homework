import "./App.css";
import PropTypes from "prop-types";
import React, { useState, useEffect, Children } from "react";
import DatePicker from "react-date-picker";
import TodoApp from "./todoList";
// Fetchinh todos array and transfer todos value to RenderTodos Component
const FetchingTodos = () => {
  const [todosArray, setTodosArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchingApi = async () => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((response) => response.json())
      .then((data) => {
        setTodosArray((prev) => data);
        setIsLoading(!isLoading);
      });
  };
  useEffect(() => {
    fetchingApi();
  }, []);
  return (
    <div>
      <RenderTodos todos={todosArray} setTodos={setTodosArray} />
      {isLoading && <div>... Loading</div>}
    </div>
  );
};
// RenderTodos excute ListtedTodos that render each todo task and TodoDescrition
const RenderTodos = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <TodoDescription
        todos={todos}
        setTodos={setTodos}
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></TodoDescription>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <ListedToodos
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              inputValue={inputValue}
              setInputValue={setInputValue}
            ></ListedToodos>
          </div>
        );
      })}
    </div>
  );
};
// TodoDescription component will execute new todo task by input tag and render AddTodo
const TodoDescription = ({ todos, setTodos, inputValue, setInputValue }) => {
  const inputFunction = (e) => {
   
    setInputValue(todoValue =>{
      if (e.target.value == "") {
        return alert("write something here ");
      } else { return  e.target.value
       
      }
    })
  };
  return (
    <div>
      Todo description
      <input
        type="text"
        placeholder="description"
        value={inputValue}
        onChange={inputFunction}
      ></input>
      <br />
      <AddTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
      ></AddTodo>
    </div>
  );
};
TodoDescription.propTypes = {
  todos: PropTypes.array,
  inputValue: PropTypes.string,
};
// Deadline component will execute DatePicker component and give date to new todo task
const Deadline = ({ deadline, setDeadline }) => {
  setDeadline(deadline);
  return (
    <span>
      Deadline
      <DatePicker onChange={setDeadline} value={deadline} />
    </span>
  );
};
//NoItems component will check todos arrays and render No items message when it being empty
const NoItems = ({ todos }) => {
  if (todos.length === 0) {
    return <div> No items </div>;
  } else {
    return null;
  }
};
//AddTodo component will invoke Deadline, NoItems components and create new todo task
const AddTodo = ({ todos, setTodos, inputValue }) => {
  const [deadline, setDeadline] = useState(new Date());
  const addtodo = () => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          description: inputValue,
          deadline: deadline.toUTCString(),
          isDone: false,
        },
      ];
    });
  };
  return (
    <div>
      <Deadline
        todos={todos}
        setTodos={setTodos}
        setDeadline={setDeadline}
        deadline={deadline}
      ></Deadline>
      <button onClick={addtodo}> Add Todo</button>
      <NoItems todos={todos}></NoItems>
    </div>
  );
};

const ListedToodos = ({ todos, todo, setTodos, inputValue, setInputValue }) => {
  const [status, setStatus] = useState(false);
  const [onEdit, setOnEdit] = useState(true);

  const inputFunction = (e) => {
    setInputValue(e.target.value);
  };

  const changeTodoStatus = () => {
    setStatus(!status);

    return todos.map((todoTask) => {
      if (todoTask.id === todo.id) {
        return (todoTask.isDone = !status);
      } else {
        return null;
      }
    });
  };

  return (
  
      <span >
      

     
        <li className='todoList'
       
       style={{ textDecoration: status ? "line-through" : "none" }}
     >
       <span>
         <span style={{ visibility: onEdit ? "visible" : "hidden" }}>
           {todo.description}|{todo.deadline}
         </span>
         {!onEdit && <input value={inputValue} onChange={inputFunction} />}
         <input
           type="checkbox"
           onChange={() => {
             changeTodoStatus();
           }}
         />
       </span>

       <Delete todo={todo} todos={todos} setTodos={setTodos}></Delete>
       <Edit
         todo={todo}
         todos={todos}
         setTodos={setTodos}
         inputValue={inputValue}
         setInputValue={setInputValue}
         onEdit={onEdit}
         setOnEdit={setOnEdit}
       ></Edit>
     </li>
       
     
      </span>
     
   
  );
};

const Edit = ({
  todo,
  todos,
  inputValue,
  setInputValue,
  setOnEdit,
  onEdit,
}) => {
  const editTodo = (e) => {
    setInputValue(e.target.value);
    setOnEdit(!onEdit);

    return todos.map((todoTask) => {
      if (todoTask.id === todo.id) {
        return (todoTask.description = inputValue);
      } else {
        return null;
      }
    });
  };

  return (
    <div>
      <span>
        <button onClick={editTodo} value={todo.description}>
          {onEdit ? "Edit" : "Update"}
        </button>
      </span>
    </div>
  );
};

const Delete = ({ todo, todos, setTodos }) => {
  const deleteTodo = () => {
    setTodos((todos) => {
      return todos.filter((todoTask) => {
        return todoTask.id !== todo.id;
      });
    });
  };
  return (
    <button
      onClick={() => {
        deleteTodo();
      }}
    >
      Delete
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <TodoApp />
      <FetchingTodos />
    </div>
  );
}

export default App;
