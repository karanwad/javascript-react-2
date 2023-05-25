import React from 'react'
import { useState } from 'react';

export const NumberBuilder = () => {
    //create state variable, one will start at 0
    let [counter, setCounter] = useState(0);
    //create state variable that stores string
    let [stringCounter, setStringCounter] = useState('');
    
    //create 3 functions for Add button and reset button
    const handleAddNum = () => {
        //when add button is clicked, increment counter by 1
            setCounter(++counter);
        //set stringCounter (stringCounter + counter)
            setStringCounter(stringCounter + " " + counter);
        
    }

    const handleReset = () => {
        //when reset button is clicked, set the counter ack to 0
        setCounter(0);
        //set the stringCounter to an empty string
        setStringCounter('');
    }
      return (
        <div>
            {/* add the two buttons on the same line */}
            <div>
                    <button onClick={()=>handleAddNum()}>Add Numbers</button>
                    <button onClick={()=>handleReset()}>Reset</button>
            {/* make an add button and reset button
             add button needs to build a string of numbers  
             */}
                {/* display the stringCounter */}
                
            </div>
            <div>
            Numbers: {stringCounter}
            </div>





        </div>
      )
    }
    
  //make an add button and reset button
  //add button needs to be able to build a string of numbers



//witin return, input both buttons
