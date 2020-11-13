import React from "react";

const TodoListItem = ({ todo, i, handleDeleteItem, handleUpdateTodo }) => {
  return (
    <>
      <li key={todo.id} className="todoListItem">
        <span
          onClick={() => handleUpdateTodo(todo)}
          className={todo.isDone ? "done" : ""}
        >
          {todo.title}
        </span>
        <span onClick={() => handleDeleteItem(todo.id)} className="deleted">
          x
        </span>
      </li>
    </>
  );
};

export default TodoListItem;
