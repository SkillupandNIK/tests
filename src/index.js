import React from "react";
import ReactDOM from "react-dom";

import Maclasse from "./Maclasse";
import { normaliser, compter, splitter } from "./fonctions";

import "./styles.css";

function App() {
  console.log(compter("salut à tous, les jeunes yo"));
  console.log(normaliser("       salut les jeunes       "));
  console.log("     salut les jeunes");

  return (
    <div className="App">
      <Maclasse />
      <fonctions />
      <splitter props="hello world" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
