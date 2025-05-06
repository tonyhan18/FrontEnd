import { useContext, useState } from 'react';
import './TodoItems.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, updateTodo } from '../store/todoSlice';

function TodoItems({id, text, completed}) {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
        setEdit((prev)=> !prev);
    }
    const handleChange = (e) => {
        dispatch(updateTodo({id, text: e.target.value}));
    }
    const handleToggle = () => {
        dispatch(toggleTodo(id));
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
                        value={text} 
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