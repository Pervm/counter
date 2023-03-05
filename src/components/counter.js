import React from 'react'
import useCounter from "../utils/hook/useCounter"
function Counter({value, colorCounter}) {
    const {   count,
        incrementCount,
        decrementCount} = useCounter(value)
    return (
    <div>
    <h1 style={{color: colorCounter}}>Counter</h1>
    <p>Count: {count}</p>
    <button onClick={incrementCount}>+</button>
    <button onClick={decrementCount}>-</button>
  </div>
  )
}

export default Counter