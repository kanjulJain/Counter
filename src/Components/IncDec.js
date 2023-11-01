import React from 'react'
import './IncDec.css'
import {useState} from 'react'

const IncDec = () => {
    const[val,setVal]=useState(0);
    
    function onIncHandler(){
        setVal(val+1)
    }
    function onDecHandler(){
        setVal(val-1);
    }
    function onResetHandler(){
        setVal(0);
    }
  return (
    <div className='Container'>
      <h1>Increment & Decrement</h1>
      <div className="comp">
        <button onClick={onDecHandler}>-</button>
        <span>{val}</span>
        <button onClick={onIncHandler}>+</button>
      </div>
      <button onClick={onResetHandler}>Reset</button>
    </div>
  )
}

export default IncDec
