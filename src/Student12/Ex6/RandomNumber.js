import React, { useState} from 'react'

export const RandomNumber = () => {
//make a state to hold that random number
    //handle click function that generates a random numbe from 0-10
  
    let [randomNum, setRandomNum] = useState(0)
  
    const handleRandomNum = () => {
        randomNum = Math.floor(Math.random() )
    <div>
        <div>Random Number:</div>
        <div>
    <button onClick ={() => generateRandomNumber()}></button>
        </div>
       
    </div>
  )
}
