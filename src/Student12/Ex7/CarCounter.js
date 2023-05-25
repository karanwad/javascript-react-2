import React, { useState } from 'react'

export const CarCounter = () => {
    //usestate for ford

    let [ford, setFord] = useState(0);
    //usestate for toyota

    let [toyota, setToyota] = useState(0);
    //usestate for chevy

    let [chevy, setChevy] = useState(0);

    //usestate for total count of cars

    let [total, setTotal] = useState(0);

    //function that takes in argument of each type of car to count
    //if statement that increments variables for each car and also the variable for total
    
    const handleClick = (carType) => {
        if (carType === "ford") {
            setFord(ford += 1)
            setTotal(total += 1)
        } else if 
          (carType === "toyota") {
            setToyota(toyota += 1)
            setTotal(total += 1)
          } else if

          (carType === "chevy") {
            setChevy(chevy += 1)
            setTotal(total += 1)
          }
        
        
    }
  return (
    <div>
        
{/* //button for ford
//button for toyota
//button for chevy  */}

<button onClick = {() => handleClick("ford")}>Ford</button>
<button onClick = {() => handleClick("toyota")}>Toyota</button>
<button onClick = {() => handleClick("chevy")}>Chevy</button>

<div>
  <p>Ford: {ford}</p>
  <p>Toyota: {toyota}</p>
  <p>Chevy: {chevy}</p>
  <p>TOTAL: {total}</p>
</div>

</div>
  )
}

