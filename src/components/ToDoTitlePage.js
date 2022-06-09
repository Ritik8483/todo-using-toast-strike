import React, { useState } from 'react'
import styles from '../styles/ToDoTitlePage.module.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ToDoModal from './ToDoModal';
import ToDoContent from './ToDoContent';

const ToDoTitlePage = () => {
    const[modal,setModal]=useState(false);
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.todobox}>
                <h2 className={styles.heading}>ToDo List</h2>
                <Button style={{marginTop:'10px'}} onClick={()=>setModal(true)} type='button' variant="contained">Add ToDo</Button>
            </div>
            <ToDoModal modal={modal} setModal={setModal} type='add'/>
            <ToDoContent />
        </div>
    </div>
  )
}

export default ToDoTitlePage