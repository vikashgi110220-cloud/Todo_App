import React, { useState } from 'react'

const AddTodo = ({addNewItem}) => {
    const[todoName, setTodoName]=useState('');
    const[dueDate, setDueDate]=useState('')
    function handleClick(){
        addNewItem(todoName, dueDate);
        setDueDate(" ");
        setTodoName(" ");
    }
  return (
    <div className="row container">
         
        <div className="col-3">
          <input type="text"  placeholder="Enter todo here"  onChange={(e)=>setTodoName(event.target.value)}  value={todoName}/>


        </div>
        <div className="col-2">
          <input type="date"  onChange={(e)=>setDueDate(event.target.value)}  value={dueDate} />
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-success"  style={{width:"80px"}}  onClick={()=>handleClick()}>Add</button>
        </div>
    </div>
  )
}

export default AddTodo
