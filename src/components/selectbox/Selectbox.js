import React, { useState } from "react";
import "./Selectbox.css";

const Selectbox = ({ myProps }) => {
  const [state, setState] = useState({
    boxActive: false,
    float: false,
    option: "",
  });

  const onSelectedClick = (e) => {
    setState({
      boxActive: !state.boxActive,
      float: state.float,
      option: state.option,
    });
  };
  const onOptionClick = (i) => {
    setState({
      boxActive: false,
      float: true,
      option: myProps.options[i],
    });
  };

  let inputID;
  const { placeholder, name, options } = myProps;
  return (
    <div>
      <div className="globalselectbox-container">
        <div className="select-box">
          <div
            className={`options-container ${state.boxActive ? "active" : ""}`}
          >
            {options.map((option, i) => (
              <div
                key={i}
                className={`option ${option === state.option ? "turq-bg" : ""}`}
                onClick={() => onOptionClick(i)}
              >
                <label
                  htmlFor={(inputID = Math.random())}
                  className="selectbox-label"
                >
                  <p className="label-p">{option}</p>
                  <input
                    type="radio"
                    className="radio"
                    id={inputID}
                    name={name}
                  />
                  <span className="radio-circle"></span>
                </label>
              </div>
            ))}
          </div>
          <div className="selected1" onClick={onSelectedClick}>
            <p className="selected1-p">{state.option}</p>
            <span
              className={`selected1-span ${state.float ? "span-floating" : ""}`}
            >
              {placeholder}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selectbox;
