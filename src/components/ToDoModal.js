import React, { useEffect, useState } from 'react'
import styles from '../styles/ToDoModal.module.css'
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addToDo, updateToDo } from '../reducer/reducer';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const ToDoModal = ({modal,setModal,type,todo_items}) => {
    const[titleValue,setTitleValue]=useState('');
    const dispatch=useDispatch();
    useEffect(()=>{
        if(type==='update' && todo_items){
            setTitleValue(todo_items.title)
        }
        else{
            setTitleValue('')
        }
    },[])

    const submitDetail=(e)=>{
        e.preventDefault();
        console.log('Title : ',titleValue);
        if(titleValue){
            if(type==='add'){
                dispatch(addToDo({
                            id:uuidv4(),
                            title:titleValue,
                            time:new Date().toLocaleString()
                        }))
                        setModal(false);
                        setTitleValue('')
                        toast.success('Task added successfully')
            }
            if(type==='update'){
                    if(todo_items.title!==titleValue){
                        dispatch(updateToDo({
                            ...todo_items,
                            title:titleValue
                        }));
                        setModal(false);
                        toast.success('Task updated successfully')
                    }
                    else{
                        setModal(false);
                        toast.error('No Updates')
                    }
                } 
        }
     
    }
  return (
    <div>
        {modal &&
            <div className={styles.todobox}>
                <div className={styles.outer_box}>
                    <div onClick={()=>setModal(false)} tabIndex={0} role="button" className={styles.close}>
                        <CloseIcon />
                    </div>
                    <h2>{type==='add'?'Add':'Update'} ToDo</h2>
                    <form onSubmit={submitDetail}>
                    <div className={styles.textFields}>
                        <TextField  name='title' value={titleValue} onChange={(e)=>setTitleValue(e.target.value)} className={styles.todoText} id="outlined-basic" label="Add Task" variant="outlined" />
                    </div>
                    <div className={styles.btn}>
                        <Button onClick={()=>setModal(false)} style={{backgroundColor:'lightblue'}} type='button' variant="contained">Cancel</Button>
                        <Button type='submit' variant="contained">{type==='add'?'Add':'Update'} Task</Button>
                    </div> 
                    </form>   
                </div>
            </div>
        }
    </div>
  )
}

export default ToDoModal