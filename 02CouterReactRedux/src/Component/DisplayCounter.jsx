import React from 'react'
import {useSelector} from "react-redux"
function DisplayCounter() {
 const  count =useSelector((store)=>store.counter)
  return (
    <div>
      <h2>Counter current value: {count}</h2>
    </div>
  )
}

export default DisplayCounter
