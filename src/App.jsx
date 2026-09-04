import "./App.css";
import Heading from "./Components/Heading";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Welcome from "./Components/Welcome";
import { useState } from "react";
function App() {
 const  newItem=[
  {
    name:"go to gym",
    dueDate:"01/01/2006"
  },
  {
    name:"go to college",
    dueDate:"01/09/2016"
  },
  {
    name:"go to market",
    dueDate:"10/01/2008"
  },

]
const[todoItem, setTodoItem]=useState(newItem);

const addNewItem=(todoName, dueDate)=>{
    const addTodoItem=[...todoItem , {name:todoName, dueDate:dueDate} ]
    setTodoItem(addTodoItem)
}

 const handleDeleteItem=(todoItemName)=>{
   const newTodoItems=todoItem.filter((item)=>item.name!==todoItemName); 
   setTodoItem(newTodoItems);
   console.log(`Item deleted : ${todoItemName}`)
  
  }

  return (
    <>
      
      
     

      <div>
        <Heading/>
        <AddTodo  addNewItem={addNewItem}/>
        {todoItem.length===0 && <Welcome></Welcome>}
        <TodoItems  todoItem={todoItem}   deleteItem={handleDeleteItem} />
        
      </div>

    


     

    
    </>
  );
}

export default App;
