import './TodoItem.css';

/**
 * 학습용으로 남겨놓은 초기 파일이기 때문에 신경 안써도 됩니다.
 */
function TodoItem() {
    return  (
        <div className="todo-item">
                <input type="checkbox" className="todo-item-checkbox" name="" id=""/>
                <p className='todo-item-text'>할 일</p>
                <button className='todo-item-button'>수정</button>
                <button className='todo-item-button'>삭제</button>
            </div>
    );
}

export default TodoItem;