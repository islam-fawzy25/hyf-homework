import React, { useState, useEffect } from "react";
import Input from "./input";

export const ApiData = React.createContext();

const Fetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const fetchFunc = async (input) => {
    try {
      await fetch(`https://api.github.com/search/users?q=${input}`)
        .then((response) => {
          if (!response.ok) {
            throw Error(" Could not  fetch the data ");
          } else {
            return response.json();
          }
        })
        .then((apiData) => {
          setData(apiData.items);
          setLoading(!loading);
          setError(!error);
        });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchFunc(searchText);
  }, [searchText]);
  return (
    <div>
      {error && <div>{error}</div>}
      <ApiData.Provider
        value={{ data, setData, fetchFunc, searchText, setSearchText }}
      >
        <Input />
      </ApiData.Provider>
    </div>
  );
};

export default Fetch;
