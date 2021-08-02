import React from "react";
import "./App.css";
import CollapsableList from "./components/CollapsableList";
import InputValid from "./components/InputValid";

function App() {
  return (
    <div className="App">
      <InputValid />
      <CollapsableList />
    </div>
  );
}

export default App;
