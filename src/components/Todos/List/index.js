import React from "react";

function List({setTodo,setHide,todo}) {

  return (
    <div className="main">
      <input
        property="toggleAll"
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
          <li></li>
      </ul>
      <div className="view">
          <input type="checkbox" className="toggle" />
          <label htmlFor=""></label>
          <button className="destroy"></button>
      </div>
    </div>
  );
}

export default List;
