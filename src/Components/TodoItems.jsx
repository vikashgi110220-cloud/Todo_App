import React from 'react'
import TodoItem from './TodoItem'
const TodoItems = ({todoItem, deleteItem}) => {
    
  return (
    <div>
     
        {todoItem.map((item)=><TodoItem  key={item.name} todoName={item.name} dueDate={item.dueDate} deleteItem={deleteItem}   />)}
    </div>
  )
}

export default TodoItems
