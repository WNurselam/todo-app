import React, { useState } from "react";
function Form({ todos, setTodos }) {
  const [form, setForm] = useState("");

  const formSubmit = (e) => {
    e.preventDefault(); //form'un sürekli yenilenmesini engelliyoruz

    if (form === "") {
      return false; // İnput değerinin boş gelmemesi için
    }
    setTodos([
      ...todos, // State içerisindeki verileri alıyoruz
      {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
        todo: form,
        checked: false,
      },
    ]);
  };

  const inputChange = (e) => {
    setForm(e.target.value); // İnput değerini değiştiğinde alıyoruz
  };

  return (
    <header className="header">
      <h1>What are you doing today</h1>
      <form onSubmit={formSubmit}>
        <input
          value={form}
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={inputChange}
        />
      </form>
    </header>
  );
}

export default Form;
