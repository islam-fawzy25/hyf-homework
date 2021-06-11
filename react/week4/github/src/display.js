import React, { useContext } from "react";
import { ApiData } from "./fetch";

const Display = () => {
  const { data } = useContext(ApiData);

  return (
    <ul>
      {!data.length ? (
        <h3>No result</h3>
      ) : (
        data.map((users) => {
          return <li key={users.id}>{users.login}</li>;
        })
      )}
    </ul>
  );
};

export default Display;
