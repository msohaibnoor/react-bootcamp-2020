import React, { useState } from "react";

import Parent from "./Parent";
import "./App.css";
import ValueContext from "./ValueContext";

function App() {
  let [number, setnumber] = useState(10);
  return (
    <ValueContext.Provider value={number}>
      <div className="App">
        <h1>Helloo hooks from Context Api</h1>
        <button onClick={() => setnumber(++number)}>++Counter</button>
        <Parent />
      </div>
    </ValueContext.Provider>
  );
}

export default App;
