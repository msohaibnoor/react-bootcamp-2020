import React, { useState } from "react";

import Parent from "./Parent";
import "./App.css";
import ValueContext from "./ValueContext";
import Selectbox from "./components/selectbox/Selectbox";

function App() {
  let value = useState(10);
  const [ageProps, setAgeProps] = useState({
    placeholder: "Age",
    name: "age",
    options: ["Brand new", "Under 5 years", "Over 5 years"],
  });
  return (
    <ValueContext.Provider value={value}>
      <div className="App">
        {/* <h1>Helloo hooks from Context Api</h1>
        <Parent /> */}
        <Selectbox myProps={ageProps} />
      </div>
    </ValueContext.Provider>
  );
}

export default App;
