export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const TOGGLE_TODO_ALL = "TOGGLE_TODO_ALL";
export const DELETE_TODO_COMPLETED = "DELETE_TODO_COMPLETED";
export const SET_FILTER = "SET_FILTER";

// init 함수는 초기 상태를 설정하는 함수이다.
export const init = () => {
  const savedTodo = JSON.parse(window.localStorage.getItem("TODO")) || [];
  const savedID = JSON.parse(window.localStorage.getItem("ID")) || 0;
  return {
    list: savedTodo,
    id: savedID ? Number(savedID) : 0,
    filterType: "ALL",
  }
}

// initialState는 초기 상태를 설정하는 객체이다. useReducer의 변수에 처음 들어가는 값이다
// list : []는 할 일 목록을 저장하는 배열이다.
// 이렇게 list로 관리하는 이유는 데이터 구조화, 확장성, 상태 관리의 일관성을 위해서이다.
export const initialState = {
  list: [],
  id: 0,
  filterType: "ALL",
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: state.list.concat({
          id: state.id +1,
          text: action.payload,
          completed: false,
        }),
        id: state.id + 1,
      };

    case UPDATE_TODO:
      return {
        ...state,
        list: state.list.map(item=>{
          if(item.id===action.payload.id){
            return {...item, text: action.payload.text};
          }
          return item;
        }),
      };

    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((item) => {
          if(item.id === action.payload){
            return {...item, completed: !item.completed}
          }
          return item;
        }),
      };
    case TOGGLE_TODO_ALL:
      return {
        ...state,
        list: state.list.map((item)=> ({...item, completed: action.payload})),
      };
    case DELETE_TODO_COMPLETED:
      return {
        ...state,
        list : state.list.filter((item)=> !item.completed)
      }

    case SET_FILTER:
      return {
        ...state,
        filterType: action.payload,
      };
    default:
      return state;
  }
}