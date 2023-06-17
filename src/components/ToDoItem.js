import React from 'react'

function ToDoItem(props) {

  return (
    <div>
        <h4>{props.title} <button className="button button4" onClick={props.delete}>done</button></h4>
        
    </div>
  )
}

export default ToDoItem