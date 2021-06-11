import React from 'react'
import "./App.css";

const Border = ({children}) => {
   
    return (
      <div   className="todoList"

      >
         {children}
      </div>
    );
  };
//        style={{ border: "2px somaind red", width: "450px", height: "500px" }}
//className="todoList"
  export default Border