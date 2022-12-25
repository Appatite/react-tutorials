import React from "react";
import { Link } from 'react-router-dom';

const TodoItem = ({ id, done, title, onToggleTodo, onDeleteTodo }) => {
    return (
        <div key={id} className="TodoItemContainer">
        <input onChange={ () => onToggleTodo(id) } checked={ done }  type="checkbox"></input>
        <Link to = {`/Todo/${id}`}>
            <p className="TodoItemText">{title}</p>
        </Link>
       <button onClick={ () => onDeleteTodo(id)} className="TodoItemDeleteButton">&#x2715;</button>
        </div>
    )
}

export default TodoItem;