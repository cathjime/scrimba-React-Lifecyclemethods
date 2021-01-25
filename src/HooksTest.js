import React, { useState } from "react";

function HooksTest() {
  let [count, setCount] = useState(0);
  let [num, setNum] = useState(1);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function double() {
    setNum((prevNum) => prevNum * 2);
  }

  function halves() {
    setNum((prevNum) => prevNum / 2);
  }

  return (
    <>
      <h2>{num}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={double}>Double</button>
      <button onClick={halves}>Halves</button>
    </>
  );
}

export default HooksTest;
