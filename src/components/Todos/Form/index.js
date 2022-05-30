import {useState} from 'react';

function Form({setTodo,todo}) {
    const [form,setForm] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();

     if(form === ""){
         return false;
     }
    
     setTodo([
         ...todo,
         {
             id:todo.length > 0 ? todo[todo.length-1].id+1:0,
             todo:form,
             checked:false
         }
     ]);

    }
    
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input 
        placeholder="What needs to be done?"
        className="new-todo"
        autoFocus
        name="text"
        onChange={(e) => setForm(e.target.value)}
         />
      </form>
    </div>
  );
}

export default Form;
