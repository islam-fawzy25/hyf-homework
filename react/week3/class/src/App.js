import "./App.css";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import TodoApp from "./todoList";
import Border from "./border";
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
        setTodosArray(data);
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
  return (
    <div>
      Todo description
      <input
        type="text"
        placeholder="description"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
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
  setInputValue: PropTypes.func,
  setTodos: PropTypes.func,
};
// Deadline component will execute DatePicker component and give date to new todo task
const Deadline = ({ deadline, setDeadline }) => {
  setDeadline(deadline);
  return (
    <span>
      Deadline
      <DatePicker
        onChange={() => {
          setDeadline(deadline);
        }}
        value={deadline}
        minDate={new Date()}
      />
    </span>
  );
};
//NoItems component will check todos arrays and render No items message when it being empty
const NoItems = ({ todos }) => {
  if (!todos.length) {
    return <div> No items </div>;
  } else {
    return null;
  }
};
//AddTodo component will invoke Deadline, NoItems components and create new todo task
const AddTodo = ({ todos, setTodos, inputValue }) => {
  const [deadline, setDeadline] = useState(new Date());
  const addTodo = () => {
    if (inputValue === "") {
      alert("Write your Todo first ");
    } else {
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
    }
  };
  return (
    <div>
      <Deadline
        todos={todos}
        setTodos={setTodos}
        setDeadline={setDeadline}
        deadline={deadline}
      ></Deadline>
      <button onClick={addTodo}> Add Todo</button>
      <NoItems todos={todos}></NoItems>
    </div>
  );
};

const ListedToodos = ({ todos, todo, setTodos, inputValue, setInputValue }) => {
  const [status, setStatus] = useState(false);
  const [onEdit, setOnEdit] = useState(true);

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
    <span>
      <Border
        todo={todo}
        todos={todos}
        setTodos={setTodos}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onEdit={onEdit}
        setOnEdit={setOnEdit}
      >
        <li style={{ textDecoration: status ? "line-through" : "none" }}>
          <span>
            <span style={{ visibility: onEdit ? "visible" : "hidden" }}>
              {todo.description}|{todo.deadline}
            </span>
            {!onEdit && (
              <input
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            )}
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
      </Border>
    </span>
  );
};

const Edit = ({
  todo,
  todos,
  setTodos,
  inputValue,
  setInputValue,
  setOnEdit,
  onEdit,
}) => {
  const editTodo = (e) => {
    setInputValue(e.target.value);
    setOnEdit(!onEdit);

    const newTodos = todos.map((todoTask) => {
      if (todoTask.id === todo.id) {
        return { ...todoTask, description: inputValue };
      } else {
        return todoTask;
      }
    });

    setTodos(newTodos);
  };
  return (
    <span>
      <button onClick={editTodo} value={todo.description}>
        {onEdit ? "Edit" : "Update"}
      </button>
    </span>
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
