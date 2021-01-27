import React, { useContext, useReducer } from "react";
import NumberReducer from "./NumberReducer";
import ValueContext from "./ValueContext";

const Child = () => {
  const value = useContext(ValueContext);
  const [state, dispatch] = useReducer(NumberReducer, 52);
  return (
    <div>
      <h3>I am you child father!</h3>
      <button onClick={() => value[1](++value[0])}>Update Me</button>
      <h1>{value[0]}</h1>
      <h1>Assumes Child 2</h1>
      <p>
        Child 2 <span style={{ fontSize: "25px" }}>{state}</span>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </button>
      </p>
    </div>
  );
};

export default Child;
