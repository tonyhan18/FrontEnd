import './TodoList.css'
import TodoItems from './TodoItems';

function TodoList({data, 
                    onToggle, 
                    onToggleAll, 
                    onDelete,
                    onDeleteCompleted,
                    onUpdate,
                }) 
{
    // 전체 체크박스의 상태를 관리하는 변수 - 단, data.length가 0이 아닐때만 체크박스의 상태를 관리함
    const isAllCompleted = data.length && data.every((item)=>item.completed);
    // 완료된 항목의 개수를 세는 변수
    const completedCount = data.filter(item=>item.completed).length
    return (
        <div className="todo-list">
            <div className="todo-header">
                <input type="checkbox" 
                        className='todo-checkbox' 
                        checked={isAllCompleted} 
                        onChange={(e)=> onToggleAll(e.target.checked)}
                />
                <p className='todo-header-text'>할 일</p>
                {
                    completedCount > 0 && (
                        <button className='todo-header-button' 
                                onClick={onDeleteCompleted}
                        >
                            {completedCount}개 선택 삭제
                        </button>
                    )
                }
            </div>
            <div>
                {
                    data.map((item)=>(
                    <TodoItems 
                        id={item.id}
                        text={item.text} 
                        completed={item.completed} 
                        onToggle={()=> onToggle(item.id)} 
                        onDelete={()=> onDelete(item.id)}
                        onUpdate={onUpdate}
                    />))
                }
            </div>
        </div>
    )
};

export default TodoList;