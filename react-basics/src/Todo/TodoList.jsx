import React from "react";
import TodoItem from './TodoItem'

const TodoList = ({ todos, title, onToggleTodo, onDeleteTodo }) => {
    return (
        <div className="TodoListContainer">
        <h2>{title}</h2>

        {
          todos.map ((t) => {
            return(
              <TodoItem key={t.id} id={t.id} done={t.done} title={t.title} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />
            )
          })

          }
        

      </div>
    )
}

export default TodoList;