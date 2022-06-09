import { createSlice } from "@reduxjs/toolkit";

const getInitailToDo=()=>{
    const localtodoList=window.localStorage.getItem('todoList');
    if(localtodoList){
        return JSON.parse(localtodoList);
    }
    window.localStorage.setItem('todoList',JSON.stringify([]));
    return [];
}

const initailValues={
    todoValue:getInitailToDo(),
}
 const toDoReducer=createSlice({
    name:'toDo',
    initialState:initailValues,
    reducers:{
    addToDo:(state,action)=>{
        state.todoValue.push(action.payload);
        const todoList=window.localStorage.getItem('todoList');
        if(todoList){
            const todoArray=JSON.parse(todoList);
            todoArray.push({
                ...action.payload
            })
            window.localStorage.setItem('todoList',JSON.stringify(todoArray));
        }
    },
    deleteToDo:(state,action)=>{
        const todoList=window.localStorage.getItem('todoList');
        if(todoList){
            const toDoArray=JSON.parse(todoList);
            let newArr = []
            toDoArray.forEach((item,index)=>{
                if(item.id===action.payload){
                  newArr =  toDoArray.filter((itm)=>itm.id!==action.payload);
                }
            })
            window.localStorage.setItem('todoList',JSON.stringify(newArr));
            state.todoValue= newArr;
        }
    },
    updateToDo:(state,action)=>{
        const todoList=window.localStorage.getItem('todoList');
        if(todoList){
            const newArr=JSON.parse(todoList);
            newArr.forEach((item,index)=>{
                if(item.id===action.payload.id){
                    item.title=action.payload.title;
                }
            })
            window.localStorage.setItem('todoList',JSON.stringify(newArr));
            state.todoValue= newArr;
        }
    }
    }
});

export const {addToDo,deleteToDo,updateToDo}=toDoReducer.actions
export default toDoReducer.reducer