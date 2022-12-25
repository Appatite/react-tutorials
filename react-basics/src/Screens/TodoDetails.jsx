import React from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

const TodoDetails = ({searchQuery, todos, setTodos}) => {
    const handleAddTodo = ( event ) => {
        if(event.key === "Enter"){
          setTodos( [ ...todos, {title: event.target.value, id: uuid(), done:false}])
          event.target.value = "";

        }
      };
  return (
    <div className="TodoInputContainer">
        <input onKeyDown={handleAddTodo} placeholder="Ändere Todo Titel" className="InputItem"/>
       <Link to ="/">
            <button>Zurück zur Homepage</button>
       </Link>
    </div>
  )
}

export default TodoDetails