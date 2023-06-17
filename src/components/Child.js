import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={props.increment}>Increment from child</button>
    </div>
  )
}

export default Child