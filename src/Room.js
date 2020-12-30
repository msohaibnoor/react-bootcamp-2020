import React, { useState } from "react";

const Room = ({ children }) => {
  const [lit, setLit] = useState(true);
  let [temp, settemp] = useState(22);
  const onClick1 = () => {
    setLit(true);
  };
  const onClick2 = () => {
    setLit(false);
  };
  const increasetemp = () => {
    settemp(++temp);
  };
  const decreasetemp = () => {
    settemp(--temp);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: lit ? "orange" : "black" }}>
      <h1 style={{ margin: "0" }}>{children}</h1>
      <h5>The room is {lit ? "Lit" : "Dark"}</h5>
      <h5>The room temperature is {temp}C'.</h5>
      <button onClick={increasetemp}>+</button>
      <button onClick={decreasetemp}>-</button>
      <div></div>
      {/* <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: lit ? "yellow" : "red",
        }}
      ></div> */}
      <button onClick={onClick1}>Turn on</button>
      <button onClick={onClick2}>Turn off</button>
    </div>
  );
};

export default Room;
