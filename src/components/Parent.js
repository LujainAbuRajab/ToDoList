import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    let [counter,SetCounter] = useState(0)
    function increment(){
        SetCounter(counter +1)
    }
  return (
    <div>
        <h1>{counter}</h1>
        <Child increment={increment}/>
    </div>
  )
}

export default Parent