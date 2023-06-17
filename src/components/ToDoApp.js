import React, { useState } from 'react'
import "./ToDoApp.css"
import ToDoItem from './ToDoItem'


function ToDoApp() {
let [id_index,setidindex] =useState(0)
    let todos = [
        {
            id: 1,
            title: "clean your room",
    
        },
        {
            id: 2,
            title: "test2",
    
        },
        {
            id: 3,
            title: "test3",
    
        }       
    ]
    

    let [todoinput,setToDoInput] = useState("")
    let [todo_lest,setToDoList]=useState(todos)
    function update_text_field(event){
        setToDoInput(event.target.value)
    }

    function inser_new(event){
      event.preventDefault();
      setToDoList([...todo_lest,{id:id_index ,title:todoinput}])
      setToDoInput("")
      setidindex(id_index+1)
    }
    function remove_task(id){
        let reamining_todos = todo_lest.filter(obj=>obj.id !=id)
        setToDoList(reamining_todos)
    }
  return (
    <div className='to-do-app'>
        <h1>My Todos</h1>

        <form>
            <input className="h1" value={todoinput} placeholder="enter your todo" onChange={update_text_field}></input>
            <button  className="button button4" onClick={inser_new}>Add new</button>
        </form>
        {
            todo_lest.map((todo)=><ToDoItem title={todo.title} key={todo.id} delete={()=>remove_task(id_index)}/>)
        }
        
    </div>
  )
}

export default ToDoApp