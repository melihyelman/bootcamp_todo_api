import React, { useState, useEffect } from "react";
import "./style.scss";
import Loader from "./components/Loader";
import TodoList from "./components/TodoList";
import { getTodos, deleteTodo, updateTodo } from "./services/api";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getTodos();
        setTodos(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };

    init();
  }, []);

  const getAllTodos = async () => {
    const { data } = await getTodos();
    setTodos(data);
  };
  const handleDeleteItem = async (id) => {
    setLoading(true);
    await deleteTodo(id);
    getAllTodos();
    setLoading(false);
  };

  const handleUpdateTodo = async (todo) => {
    await updateTodo(todo.id, { isDone: !todo.isDone });
    getAllTodos();
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log(todos);
  return (
    <div className="container">
      <h3> {todos.length ? `You have ${todos.length}` : "No"} todos</h3>
      <TodoList
        todos={todos}
        handleDeleteItem={handleDeleteItem}
        handleUpdateTodo={handleUpdateTodo}
      />
      <Form todos={todos} getAllTodos={getAllTodos} />
    </div>
  );
}

export default App;
