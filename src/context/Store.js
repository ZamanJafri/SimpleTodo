import { createContext, useEffect, useReducer } from "react";

// this initialState created only learning purpose
// initialState
// const initialState = {
//   todos: ["Zaman", "Ahmad", "Jafri"],
//   addRecord: () => {},
//   deleteRecord: () => {},
// };

// createContext
export const Store = createContext();

// get data from localStorage
const getRecords = () => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
};

// initialState
const initialState = getRecords();
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
        todos: [...state.todos.filter((value) => value !== action.payload)],
      };
    default:
      return state;
  }
};
const StroreProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  //   add records into todo
  const addRecord = (item) => {
    dispatch({
      type: "ADD_RECORDS",
      payload: item,
    });
  };
  //   save to the localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);
  //   this section is used delete data
  const deleteRecord = (item) => {
    dispatch({
      type: "DELETE_RECORDS",
      payload: item,
    });
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
