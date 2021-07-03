import React, { useContext } from "react";
import { ApiData } from "./Fetch";
import UserList from "./UserList";

const Input = () => {
  const { loading, searchText, setSearchText } = useContext(ApiData);

  return (
    <div>
      <h1>GitHub user searcher</h1>
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      {loading && <div>... Loading</div>}
      <UserList />
    </div>
  );
};

export default Input;
