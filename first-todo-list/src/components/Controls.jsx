import { useContext, useState } from 'react';
import './Controls.css'
import { TodoContext } from '../context';
import { SET_FILTER } from '../reducer';
import { useSelector, useDispatch } from 'react-redux';
import { createTodo, setFilter } from '../store/todoSlice';

/**
 * Context를 사용함으로써 기존에 컴포넌트 별로 인자를 내려주었던 것을
 * 깔끔하게 useContext를 사용하여 상태를 관리할 수 있다.
 * 
 * 또한 reducer를 사용하여 상태 관리를 Context API와 함께 사용함으로써
 * 기존에 거대한 상태 로직과 Event Handler를 사용했던 것을
 * 깔끔하게 관리할 수 있다.
 * 
 * Redux를 사용하여 상태 관리를 할 수 있다.
 * useSelector를 사용하여 상태를 가져오고, useDispatch를 사용하여 상태를 변경할 수 있다.
 */
function Controls() {
    const state = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const handleChange= (e) => {
        setText(e.target.value);
    };
    const handleSubmit = () => {
        dispatch(createTodo(text));
        setText("");
    };
    const handleChangeFilterType = (e) => {
        dispatch(setFilter(e.target.value));
    }
    return <div className="controls">
        <input type="text" 
                className="input" 
                value={text} 
                onChange={handleChange} />
        <button className="button" 
                onClick={handleSubmit}>추가</button>
        <select className="select" 
                value={state.filterType} 
                onChange={handleChangeFilterType}>
            <option value="ALL">전체</option>
            <option value="TODO">할 일</option>
            <option value="COMPLETED">완료</option>
        </select>
    </div>
}

export default Controls;