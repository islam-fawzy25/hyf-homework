import "./App.css";
import React from "react";
import Fetch from "./fetch";
import GitHubApi from "./gitApi";

function App() {
  return (
    <div className="App">
      <Fetch></Fetch>
      <GitHubApi></GitHubApi>
    </div>
  );
}

export default App;
