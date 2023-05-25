import React, { useState } from 'react'

export const MinMaxCounter = () => {
let [counter, setCounter]= useState(0);
  //creat variables for min value
  let [min, setMin] = useState(0);
  //create variable for max value
  let [max, setMax] = useState(0);

  //create handleClick function
  const handleClick= (direction) => {
      //create if argument passed iy
      // n equals 'down' decrement counter
      //else increment counter  

      if(direction === 'up') {
          setCounter(++counter)
          //if counter >= max, then set the counter as the max
          if(counter >=max){
            setMax(counter);
          }
      } else {
          setCounter(--counter)
          //if counter <= min, then set the counter as the min
          if(counter <= min){
            setMin(counter);
          }
      }


  } 

return (
  <div>

      {/* create down button using onClick that takes handleClick passing in 'down' */}
      <button onClick={()=>handleClick('down')}>Down</button>
      
      {/* state variable counter */}
      { counter }
      {/* create up button using onClick that takes handleClick passing in 'up'  */}
      <button onClick={()=>handleClick('up')}>Up</button>
      <p>Min: {min}</p>
      <p>Max: {max}</p>
  </div>
)
}