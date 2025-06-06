import React , { useState } from 'react'
import '../components/counter.css'

function counter() {
    const [count, setCount] = React.useState(0);
  return (
    <div className="counter">
        <p id='para'>You Have Clicked {count} Times</p>
        <button id='btn' onClick={()=>{ setCount(count+1)}} >Click Me</button>
        
    </div>
  )
}

export default counter