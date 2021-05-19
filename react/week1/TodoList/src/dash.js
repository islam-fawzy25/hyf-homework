import { useState } from "react";

import Table from "react-bootstrap/Table";

export function Header() {
  const todayDate = new Date().toDateString();

  return (
    <header>
      <h1 className="App-header">Wellcome to TODO Website</h1>
      <h3>Today : {todayDate}</h3>
    </header>
  );
}

export function TableBody(props) {
  return (
    <tr>
      <td>{props.obj.todoItem} </td>
      <td>{props.obj.description}</td>
      <td>{props.obj.deadlineDate}</td>
    </tr>
  );
}

export default function TodoTable(props) {
  console.log(props.todoData);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ToDo</th>
          <th>Description</th>
          <th>Deadline Date</th>
        </tr>
      </thead>
      <tbody>
        {props.todoData.map((obj, index) => {
          return <TableBody key={index} obj={obj} />;
        })}
      </tbody>
    </Table>
  );
}
