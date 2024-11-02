import React from 'react'
import {useSelector} from "react-redux"
function DisplayCounter() {
 const  {counterVal} =useSelector((store)=>store.counter);
 
  return (
    <div>
      <h2>Counter current value: {counterVal}</h2>
    </div>
  )
}

export default DisplayCounter
