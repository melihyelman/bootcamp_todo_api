import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleDeleteItem, handleUpdateTodo }) => {
  return (
    <ul className="todoList">
      {todos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
          handleDeleteItem={handleDeleteItem}
          handleUpdateTodo={handleUpdateTodo}
        />
      ))}
      {!todos.length && (
        <p
          style={{ marginTop: "10px", textAlign: "center", fontWeight: "500" }}
        >
          There is no todos
        </p>
      )}
    </ul>
  );
};

export default TodoList;
