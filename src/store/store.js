import { configureStore } from "@reduxjs/toolkit";
// import { toDoReducer } from "../reducer/reducer";
import toDoReducer from '../reducer/reducer'

export const store=configureStore({
    reducer:{
        toDo:toDoReducer,
    }
})