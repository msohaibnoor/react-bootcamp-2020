import React from "react";
import Child from "./Child";

const Parent = ({ number }) => {
  return (
    <div>
      <h2>I am your Father!</h2>
      <Child />
    </div>
  );
};

export default Parent;
