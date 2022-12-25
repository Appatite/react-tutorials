// import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TodoList from '../Todo/TodoList';


const Todo = ({searchQuery, todos, setTodos}) => {
    // const [todos, setTodos ] = useState(
    //     [
    //       { title: "test todo", id: uuid(), done: false }
    //     ]
    //   );

      const handleAddTodo = ( event ) => {
        if(event.key === "Enter"){
          setTodos( [ ...todos, {title: event.target.value, id: uuid(), done:false}])
          event.target.value = "";
        }
      };
    
      const handleDeleteTodo = (id) => {
        setTodos(todos.filter( (t) => t.id !== id));
      }
      const handleToggleTodo = (id, event) => {
        setTodos( todos.map( (t) => {
          if(t.id === id){
            return  { ...t, done: !t.done}
          }
     
    
          return t;
    
        }))
      }
    
    
    
      const activeTodos = todos.filter( (t) => t.done !== true);
      const doneTodos = todos.filter( (t) => t.done === true);
      const filteredTodos = todos.filter( (t) => t.title.toLowerCase().includes(searchQuery.toLowerCase()));

      return (
        <>
        <div className="TodoInputContainer">
          <input onKeyDown={handleAddTodo} placeholder="Hier Todo hinzufügen" className="InputItem" />
        </div>


        {searchQuery ? (<TodoList title="Suchergebnisse:" todos={filteredTodos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />) : (
              
      <>
        <TodoList title="Zu erledigen:" todos={activeTodos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />


        <TodoList title="Erledigt:" todos={doneTodos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />
        </>
  )}
      </>
      )
}

export default Todo;