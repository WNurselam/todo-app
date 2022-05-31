import {useState} from "react";

function Footer({todo,setTodo,setHide}) {

    
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong></strong>
      </span>
      <ul className="filters">
        <li>
          <a>All</a>
        </li>

        <li>
          <a>Active</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
