import React from 'react'

const TodoItem = ({todoName, dueDate, deleteItem}) => {
  return (
     <div className="row  container">
        <div className="col-3">
          <div>{todoName}</div>


        </div>
        <div className="col-2">
          <div>{dueDate}</div>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-danger"  onClick={()=>deleteItem(todoName)}>Remove</button>
        </div>
    </div>

  )
}

export default TodoItem
