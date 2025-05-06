import Layout from './components/Layout';
import Title from './components/Title';
import Controls from './components/Controls';
import TodoList from './components/TodoList';
import { useReducer, useState } from 'react';
import {useRef} from 'react'
import { initialState, reducer } from './reducer';

/**
 * 아래와 같이 코드를 짰을 경우 생길 문제점 : 
 * 1. useReducer와 useState 혼용:
 * - useReducer를 사용하여 상태 관리를 하고 있지만, useState를 사용하여 상태를 관리하고 있습니다.
 * 2. idRef의 상태 관리:
 * - idRef는 컴포넌트의 상태와는 독립적으로 동작하기 때문에, 컴포넌트가 재렌더링되더라도 idRef의 값은 유지됩니다. 
 * 3. 필터링 로직의 비효율성:
 * - filteredList를 매 렌더링마다 계산하고 있습니다. list나 filterType이 변경될 때만 필터링이 실행되도록 useMemo를 사용하면 성능을 최적화할 수 있습니다.
 * 4. 컴포넌트 재사용성 부족:
 * - Controls와 TodoList 컴포넌트가 지나치게 많은 props를 받고 있습니다.
 * 5. 상태 관리의 복잡성 증가:
 * - 상태 관리 로직이 컴포넌트 내부에 모두 포함되어 있어, 코드가 길고 복잡해졌습니다.
 * 6. handleSubmit에서 concat 사용:
 * - setList에서 prevList.concat을 사용하고 있습니다. 이는 새로운 배열을 생성하지만, spread 연산자를 사용하면 더 간결하게 작성할 수 있습니다.
 * 7. 에러 핸들링 부족:
 * - 입력값 검증이나 에러 핸들링이 없습니다.
 * 8. CSS 및 스타일링 관련 문제:
 * - 코드에서 스타일링 관련 내용이 전혀 언급되지 않았습니다. 컴포넌트 간의 레이아웃이나 디자인이 깨질 가능성이 있습니다.
 */
function App() {
  const [state, dispatch ] = useReducer(reducer, initialState);
  const idRef = useRef(0)
  const [list, setList] = useState([])
  const [filterType, setFilterType] = useState("ALL")

  /* Controls에 아래값을 넘겨주어서 체크리스트 항목 만들기 */
  const handleSubmit = (value) => {
    setList(prevList => prevList.concat({
      id: (idRef.current +=1),
      text: value,
      completed: false,
    }));
  };
  // 체크 버튼을 클릭시 처리함
  const handleToggle = (id) => {
        setList(prevList => prevList.map( item=> {
          if(item.id === id){
            return {...item, completed: !item.completed}
          }
          return item;
        }))
  }
  // 전체 체크 버튼을 클릭시 처리함
  const handleToggleAll = (flag) => {
    setList(prevList=>prevList.map(item=> ({...item, completed: flag})))
  }
  // 삭제 버튼을 클릭시 처리함
  const handleDelete = (id) => {
    setList(prevList => prevList.filter(item => item.id !== id))
  }
  // 완료된 항목을 삭제하는 버튼을 클릭시 처리함
  const handleDeleteCompleted = () => {
    setList(prevList=>prevList.filter((item)=> !item.completed))
  }
  // 수정 버튼을 클릭시 처리함 -> 보면 알겠지만 이거 하나 보내는데 자식에 자식까지 보내야함
  const handleUpdate = (id, text) => {
    setList(prevList=> prevList.map(item=>{
      if(item.id===id){
        return {...item, text};
      }
      return item;
    }))
  }
  // 필터링을 위한 함수
  const handleChangeFilterType=(type)=>{
    setFilterType(type)
  }
  const filteredList = list.filter(item=>{
    if(filterType==='ALL'){
      return item;
    }
    else if(filterType==='TODO'){
      return !item.completed;
    }
    else{
      return item.completed;
    }
  })
  return (
    <div>
    <Layout>
      <Title/>
      <Controls filterType={filterType} 
                onChangeFilterType={handleChangeFilterType}
                onSubmit={handleSubmit}/>
      <TodoList data={filteredList} 
                onToggle={handleToggle} 
                onToggleAll={handleToggleAll} 
                onDelete={handleDelete}
                onDeleteCompleted={handleDeleteCompleted}
                onUpdate={handleUpdate}/>
      </Layout>
    </div>
  );
}

export default App;