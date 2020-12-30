import React, { useContext } from "react";
import ValueContext from "./ValueContext";

const Child = () => {
  const number = useContext(ValueContext);
  return (
    <div>
      <h3>I am you child father!</h3>
      <h1>{number}</h1>
    </div>
  );
};

export default Child;
