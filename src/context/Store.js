import { createContext, useReducer } from "react";
// initialState
const initialState = {
  todos: ["Zaman", "Ahmad", "Jafri"],
  addRecord: () => {},
  deleteRecord: () => {},
};
// create
export const Store = createContext();

// todoReducer
const todoReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_RECORDS":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_RECORDS":
      return {
        ...state,
        todos:[...state.todos.filter(value => value !== action.payload)]
      }
    default:
      return state;
  }
};
const StroreProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addRecord = (item) => {
    dispatch({
      type: "ADD_RECORDS",
      payload: item,
    });
  };
  const deleteRecord = (item) => {
    dispatch({
        type:"DELETE_RECORDS",
        payload:item
    })
  };
  return (
    <Store.Provider
      value={{
        ...initialState,
        todos: [...state.todos],
        addRecord,
        deleteRecord,
      }}
    >
      {props.children}
    </Store.Provider>
  );
};
export default StroreProvider;
