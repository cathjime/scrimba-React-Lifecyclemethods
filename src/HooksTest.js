import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function HooksTest() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("");

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <>
      <h2 style={{ color: color }}>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default HooksTest;
