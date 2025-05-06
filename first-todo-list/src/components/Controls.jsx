import { useContext, useState } from 'react';
import './Controls.css'
import { TodoContext } from '../context';
import { ADD_TODO, SET_FILTER } from '../reducer';


const inputClassName = `grow border-[1px] border-solid border-gray-500 rounded-[6px] bg-transparent
    px-[12px] py-[4px] text-[14px] leading-[20px] text-white;
    `;

const commonClassName = `border-[1px] border-solid border-gray-100 rounded-[6px] 
    bg-transparent px-[12px] py-[0px] text-white shrink;`;

/**
 * Context를 사용함으로써 기존에 컴포넌트 별로 인자를 내려주었던 것을
 * 깔끔하게 useContext를 사용하여 상태를 관리할 수 있다.
 * 
 * 또한 reducer를 사용하여 상태 관리를 Context API와 함께 사용함으로써
 * 기존에 거대한 상태 로직과 Event Handler를 사용했던 것을
 * 깔끔하게 관리할 수 있다.
 */
function Controls() {
    const {state, dispatch} = useContext(TodoContext);
    const [text, setText] = useState("");
    const handleChange= (e) => {
        setText(e.target.value);
    };
    const handleSubmit = () => {
        dispatch({type: ADD_TODO, payload: text});
        setText("");
    };
    const handleChangeFilterType = (e) => {
        dispatch({type: SET_FILTER, payload: e.target.value});
    }
    return <div className="flex gap-[6px] h-[30px]">
        <input type="text" 
                className={inputClassName}
                value={text} 
                onChange={handleChange} />
        <button className={commonClassName}
                onClick={handleSubmit}>추가</button>
        <select className={commonClassName}
                value={state.filterType} 
                onChange={handleChangeFilterType}>
            <option value="ALL">전체</option>
            <option value="TODO">할 일</option>
            <option value="COMPLETED">완료</option>
        </select>
    </div>
}

export default Controls;