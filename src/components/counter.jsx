import React , { useState } from 'react'
import '../components/counter.css'

function counter() {
    const [count, setCount] = React.useState(0);
  return (
    <div className="counter">
        <p id='para' style={{fontWeight:"600"}}>You Have Clicked {count} Times</p>
        <button id='btn' onClick={()=>{ setCount(count+1)}} >➕</button>
        <button id='btn' onClick={()=>{setCount(count-1)}}>➖</button>
        <button id='btn' onClick={()=>{setCount(0)}}>🔁</button>
    </div>
  )
}

export default counter