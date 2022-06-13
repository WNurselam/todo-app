import Footer from './Footer';
import Form from './Form';
import List from './List';
import React,{useState} from 'react';

 function Todos() {

  //Liste verilerini tutmak için bir array state kullanıyoruz.
  const [todos,setTodos] = useState([]);

 //Listenin footer'dan gelen bilgiye göre listeleme yapacağız başlangıç değer 'All' olarak atadık
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
      setHide={setHide} 
      />

    </div>
  )
}

export default Todos;