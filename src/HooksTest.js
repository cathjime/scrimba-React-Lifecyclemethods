import React, {useState} from "react";

function HooksTest() {
    let [ value ] = useState("Hubba Hubba")
    
  return (
    <>
      <h2>This is a test on hooks - {value}</h2>
    </>
  );
}

export default HooksTest;
