import Layout from './components/Layout';
import Title from './components/Title';
import Controls from './components/Controls';
import TodoList from './components/TodoList';
import { ToDoProvider } from './context';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './store/todoSlice';


/**
 * 기존에는 거대한 상태 로직과 Event Handler를 사용했다.
 * 그 결과 로 코드가 복잡해지고, 가독성이 떨어졌다.
 * 이를 개선한 것이 Context API와 Reducer이다. 
 */
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  },[])
  return (
    <ToDoProvider>
      <Layout>
        <Title/>
        <Controls />
        <TodoList />
      </Layout>
    </ToDoProvider>
  );
}

export default App;