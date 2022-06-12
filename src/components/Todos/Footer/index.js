import React, { useState } from "react";

function Footer({ todos, setTodos, sethide }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong mv-value="todoLeft">0</strong>
      </span>
      <ul className="filters">
        <li>
          <a className="">All</a>
        </li>
        <li>
          <a className="">Active</a>
        </li>
        <li>
          <a className="">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
