import React from "react";
//import hook
import { useState } from "react";

export const TenCounter = () => {
  // create hook with counter, setCounter, set intial value to zero
  let [counter, setCounter] = useState(0);
  //create a function for button
  const handleCount = () => {
    //if counter greater or equal to 10
    if (counter > 10) {
      //set the counter to 0
      setCounter(0);
    }
    //else we will increment the counter
    else {
      setCounter(counter++);
    }
  }
    return (
      <div>
        TenCounter
        {/* create button with onClick  */}
        <button onClick={() => handleCount()}>Push</button>
        Counter:{counter}
      </div>
    );
  };
