import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">

        <h1>{count}</h1>

        <div className="btn">
          <button className="incre" onClick={() => setCount(count + 1)}>
            Increment
          </button>

          <button
            className="decre"
            onClick={() => setCount(count > 0 ? count - 1 : 0)}>
            Decrement
          </button>

          <button className="res" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
