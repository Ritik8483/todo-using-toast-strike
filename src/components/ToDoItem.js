import React, { useState } from 'react'
import styles from '../styles/ToDoItem.module.css'
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../reducer/reducer';
import ToDoModal from './ToDoModal';
import toast from 'react-hot-toast';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ToDoItem = ({todo_items}) => {
    const[modal,setModal]=useState(false);
    const [checked, setChecked] = useState(false);
    const[strike,setStrike]=useState(false);
    

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setStrike(!strike);
    toast.success( event.target.checked?  'Task completed ':'Task incomplete');
  };
    const dispatch=useDispatch();
    const handleDelete=()=>{
        dispatch(deleteToDo(todo_items.id));
        toast.success('Task deleted successfully');
    }
    const handleEdit=()=>{
        setModal(true);
    }
    const handleCheckbox=()=>{
        alert('dssd');
        
    }

  return (
    <div>
        <div className={styles.itemBox}>
           <div className={styles.seperate}>
                <div className={styles.check}>
                    <Checkbox {...label} checked={checked} onChange={handleChange} />
                    <p className={`${styles.todoText} ${strike ? styles.striked : ''}`}>{todo_items.title}</p>
                </div>
                <div className={styles.icons}>
                    <div onClick={handleEdit} className={styles.iconOuter}><EditIcon/></div>
                    <div onClick={handleDelete} tabIndex={0} role='button' className={styles.iconOuter}><DeleteIcon/></div>
                </div>
           </div>
           <ToDoModal
            modal={modal}
            setModal={setModal}
            todo_items={todo_items}
            type='update'
           />
        </div>
    </div>
  )
}

export default ToDoItem