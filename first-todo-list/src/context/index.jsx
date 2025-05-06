import { createContext, useEffect, useReducer } from "react";
import { reducer, initialState, init } from "../reducer"

/*
  * 기존에 App.jsx에서 상태를 관리하던 것을 Context API로 변경하였다.
  * Context API는 전역 상태 관리 라이브러리이다.
  * Provider를 사용하여 하위 컴포넌트에 상태를 전달한다.
  * useReducer를 사용하여 상태를 관리한다.
  * useEffect를 사용하여 상태가 변경될 때마다 localStorage에 저장한다.
*/
export const TodoContext = createContext();
export const ToDoProvider = ({children}) => {
  // useReducer에서는 reducer, initialArg(state로 전달), init(초기상태 설정)을 사용하여 상태를 관리한다.
  const [state, dispatch ] = useReducer(reducer, initialState, init);
  
  useEffect(()=>{
    window.localStorage.setItem("TODO", JSON.stringify(state.list));
    window.localStorage.setItem("ID", JSON.stringify(state.id));
  }, [state]);

  return (
      <TodoContext.Provider value={{ state, dispatch }}>
        {children}
      </TodoContext.Provider>
  );
}