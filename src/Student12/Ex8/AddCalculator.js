import React, {useState} from 'react'
//ioiu
export const AddCalculator = () => {
  let [Total, setTotal] = useState(0)
  const onhandleClick=(value)=>{
    setTotal(Total+=value)
  }
  
    return (
    <div>
        <button onClick={()=>onhandleClick(1)}>Add 1</button>
        <button onClick={()=>onhandleClick(2)}>Add 2</button>
        <button onClick={()=>onhandleClick(3)}>Add 3</button>
    <br/>
    Total:{Total}
    </div>

  )
}
