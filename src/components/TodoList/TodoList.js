import React from 'react';
// import ReactDOM from 'react-dom';
import TodoListItem from './TodoListItem/TodoListItem';
import './todolist.css';


const TodoList = ({ todo, onDeleted, onToggleDone, onToggleImportant }) => {

  const elements = todo.map((el) => {
  
    const { id,  ...elItems } = el;


    return (
      <li className="list-group"
        key={id}>
        <TodoListItem {...elItems} onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)} />

      </li>);

  })

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  )
}


export default TodoList;