import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from './ToDoItem';

const ToDoContent = () => {
    const todoData=useSelector((state)=>  state.toDo.todoValue);
    // console.log('All Data : ',todoData);
    const sortedToDo=[...todoData].sort((a,b)=>new Date(b.time)-new Date(a.time));
    // console.log('sortedToDoLISt',sortedToDo);
  return (
    <div>
        {  sortedToDo.length>0 ? 
           sortedToDo.map((todo_items)=>( <ToDoItem key={todo_items.id} todo_items={todo_items} />))
           : <h1>No todo found</h1>
        }

    </div>
  )
}

export default ToDoContent