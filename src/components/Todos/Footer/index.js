import React, { useState } from "react";

function Footer({ todos, setTodos, setHide }) {
  const unCompleted = todos.filter((item) => item === false); // Tamamlanma durumuna göre filtreleme yapıyoruz.

  const [select, setSelect] = useState("selected", "", ""); // Footer butonları için oluşturulan butonları seçilme durumu

  //Tamamlanmış listeyi silmek için filtre işlemi yapıyoruz.
  const clearCompleted = () => {
    setTodos(todos.filter((item) => item.checked === false));
  };

  //Butonların tıklanmasına göre selected classını atayabilmek için hide  state'e id atıyoruz
  const selectButton = (e) => {
    switch (e.target.id) {
      case "All":
        setSelect(["selected", "", ""]);
        setHide("All");
        break;
      case "Active":
        setSelect(["", "selected", ""]);
        setHide("Active");
        break;
      case "Completed":
        setSelect(["", "", "selected"]);
        setHide("Completed");
        break
      default:
    }
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{unCompleted.length} </strong>
        {unCompleted.length > 1 ? "items left" : "item left"}
      </span>
      <ul className="filters">
        <li>
        <a href="/#" className={select[0]} id="All" onClick={selectButton} >All</a>
        </li>
        <li>
        <a href="/#" className={select[1]} id="Active" onClick={selectButton} >Active</a>
        </li>
        <li>
        <a href="/#" className={select[2]} id="Completed" onClick={selectButton} >Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
