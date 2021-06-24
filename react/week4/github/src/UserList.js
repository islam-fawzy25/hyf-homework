import React, { useContext } from "react";
import { ApiData } from "./Fetch";

const UserList = () => {
  const { data } = useContext(ApiData);

  return (
    <ul>
      {!data.length ? (
        <li>No result</li>
      ) : (
        data.map((users) => {
          return <li key={users.id}>{users.login}</li>;
        })
      )}
    </ul>
  );
};

export default UserList;
