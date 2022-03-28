import React from "react";
import { ITodo } from './../interfaces';

type TodoListProps = {
  todos: ITodo[]
  onToggle: (id: number) => void, 
  onRemove: (id: number) => void 
}

const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {
  if (todos.length === 0) {
    return <p className="center">There is nothing to do yet...</p>
  }

  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    onRemove(id);
  }

  return (
    <ul>
      {todos.map(todo => {
        return (
          <li className="todo" key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(e) => removeHandler(e, todo.id)}>delete
              </i>
            </label>
          </li>
        )
      })}      
    </ul>
  )
}

export default TodoList;