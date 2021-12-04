import React, { useState, useEffect } from "react";
import "./Counter.css";
const Counter = (props) => {
  // Set States to manage counter variables
  // Check if counter is running or stopped
  const [isCounting, setIsCounting] = useState();
  // Update counter number to be displayed
  const [number, setNumber] = useState(0);

  // Set and manage timer
  useEffect(() => {
    let interval = null;
    // Begin timer and count every second
    if (isCounting) {
      interval = setInterval(() => {
        setNumber((seconds) => seconds + 1);
      }, 1000);
    }
    // Clear timer when counter is paused or stopped
    else if (!isCounting) {
      clearInterval(interval);
    }
    // Clear timer when element is unmounted from the DOM
    return () => {
      clearInterval(interval);
    };
  });

  // Start or resume counter
  const startCounter = () => {
    setIsCounting(true);
  };
  // pause counter
  const pauseCounter = () => {
    setIsCounting(false);
  };
  // Stop counter and reset count to 0
  const stopCounter = () => {
    setIsCounting(false);
    setNumber(0);
  };

  // Manage start and pause button clicks
  const controlCounter = (event) => {
    event.target.textContent === "Start" ||
    event.target.textContent === "Resume"
      ? startCounter()
      : pauseCounter();
  };

  return (
    <div className="counter">
      <div className="counter-number">{number}</div>
      <div className="counter-controls">
        <button onClick={controlCounter}>
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
