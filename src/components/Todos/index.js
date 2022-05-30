import { useState,useEffect } from 'react'
import Form from './Form'
import List from './List'
import Footer from './Footer'


function Todos() {
    const [todo,setTodo] = useState([]) // State'i diğer componentlere aktarmak için burada kullanıyoruz.

    const [hide, setHide] = useState("All");
  return (
    <div>Todos
         <Form setTodo={setTodo} todo={todo}/>
         <List setTodo={setTodo} todo={todo} setHide= {setHide}/>
         <Footer/>
    </div>
   
  )
}

export default Todos