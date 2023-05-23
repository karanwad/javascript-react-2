import React from 'react'
import { useState } from 'react'

export const DateFetcher = () => {
    const[date, setDate]= useState("unknown")

    const onClick= () => {
        const newDate= new Date().toUTCString()
        setDate(newDate)
    }

    return (
        <div>
            <button onClick={ () =>onClick()}>Push</button>
            UTC Date:{date}
        </div>
    )
}