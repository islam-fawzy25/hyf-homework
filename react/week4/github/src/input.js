import React, { useContext } from "react";
import { ApiData } from "./fetch";
import Display from "./display";

const Input = () => {
  const {  loading , users,setUsers } = useContext(ApiData);

  return (
    <div>
      <h1>GitHub user searcher</h1>
      <input
        type="text"
        value={users}
        onChange={(e) => {
         setUsers(e.target.value);
        }}
      />
      {loading && <div>... Loading</div>}
      <Display></Display>
    </div>
  );
};

export default Input;
