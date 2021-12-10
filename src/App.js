import "./styles.css";
import Counter from "./Counter/Counter";
import * as React from "react";

export default function App() {
  const [total, setTotal] = React.useState(0);
  return (
    <div className="App">
      <h1 className="heading">Timer</h1>
      <h1>Total: {total}</h1>
      <Counter addTotal={() => setTotal((prev) => prev + 1)}>
        Start editing to see some magic happen!
      </Counter>
      <Counter addTotal={() => setTotal((prev) => prev + 1)}>
        Start editing to see some magic happen!
      </Counter>
      <Counter addTotal={() => setTotal((prev) => prev + 1)}>
        Start editing to see some magic happen!
      </Counter>
      <Counter addTotal={() => setTotal((prev) => prev + 1)}>
        Start editing to see some magic happen!
      </Counter>
    </div>
  );
}
