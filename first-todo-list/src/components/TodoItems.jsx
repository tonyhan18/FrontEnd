import { useContext, useState } from 'react';
import './TodoItems.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, updateTodo } from '../store/todoSlice';

function TodoItems({id, text, completed}) {
    const dispatch = useDispatch();
    const [newText, setNewText] = useState(text);
    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
        if (edit) {
            dispatch(updateTodo({id, text: newText}));
        }
        setEdit((prev)=> !prev);
    }
    const handleChange = (e) => {
        setNewText(e.target.value);
    }
    const handleToggle = () => {
        dispatch(toggleTodo({id, completed: !completed}));
    }
    const handleDelete = () => {
        dispatch(deleteTodo(id));
    }
    return (
        <div className="todo-item">
            <input type="checkbox" 
                    className='todo-item-checkbox' 
                    checked={completed} 
                    onChange={handleToggle}
                />
            {edit ? (
                <input className='todo-edit-input' 
                        value={newText} 
                        onChange={handleChange}/>
            ) : (
                    <p className={['todo-item-text', 
                        completed && 'completed'].join(" ")}>{text}</p>
                )
            }
            <button className='todo-item-button' 
                    onClick={handleEdit}>수정</button>
            <button className='todo-item-button' 
                    onClick={handleDelete}>삭제</button>
        </div>
    );
}

export default TodoItems;