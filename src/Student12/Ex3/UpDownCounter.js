import React, { useState } from 'react'

export const UpDownCounter = () => {
    //create hook with counter and setCounter
    let [counter, setCounter]= useState(0)
    //initalize counter to value 0

    //create handleClick function
    const handleClick= (direction) => {
        //create if argument passed iy
        // n equals 'down' decrement counter
        //else increment counter  

        if(direction === 'down') {
            setCounter(counter--)
        } else {
            setCounter(counter++)
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
    </div>
  )
}
