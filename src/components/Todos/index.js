import Footer from './Footer';
import Form from './Form';
import List from './List';
import React,{useState} from 'react';

 function Todos() {

  const [todos,setTodos] = useState([]);
  const [hide,setHide] = useState("All") 

  return (
    <div>
      <Form 
      todos={todos}
      setTodos ={setTodos}
      />
      <List
      todos={todos}
      setTodos={setTodos}
      hide={hide}
      />
      <Footer
      todos={todos}
      setTodos={setTodos}
      hide={hide}
      />

    </div>
  )
}

export default Todos;