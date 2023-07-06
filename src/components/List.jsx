import React, { useContext } from "react";
// import TodoContext from "../context/TodoContext";
import { Store } from "../context/Store";

const List = () => {
  const  {todos,deleteRecord} = useContext(Store);
  return (
    <>
      <div className="todo-list-container">
        <div className="todo-item-container">
            {
                todos.length > 0 ? todos.map((values,index)=>(
                 <div className="d-flex" key={index}>
                    <h1>{values}</h1>
                    <button onClick={() => deleteRecord(values)}>Delete</button>
                    </div>
                )): <h1>No Records founds</h1>
            }
         
          
        </div>
      </div>
    </>
  );
};

export default List;
