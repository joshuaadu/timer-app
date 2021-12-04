import React, { useState, useEffect } from "react";
import "./Counter.css";
const Counter = (props) => {
  const [isCounting, setIsCounting] = useState();
  const [number, setNumber] = useState(0);

  const startCounter = () => {
    setIsCounting(true);
  };

  useEffect(() => {
    let interval = null;
    if (isCounting) {
      interval = setInterval(() => {
        setNumber((seconds) => seconds + 1);
      }, 1000);
    } else if (!isCounting) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  const stopCounter = () => {
    setIsCounting(false);
  };
  return (
    <div className="counter">
      <div className="counter-number">{number}</div>
      <div className="counter-controls">
        <button onClick={startCounter}>
          {number < 1 ? "Start" : !isCounting ? "Resume" : "Pause"}
        </button>
        <button
          onClick={stopCounter}
          style={{ display: !isCounting ? "none" : "initial" }}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Counter;
