import React, {useState} from "react";

function HooksTest() {
    let [ count, setCount ] = useState(0)

    function increment(){
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement(){
        setCount(prevCount => prevCount - 1)
    }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default HooksTest;
