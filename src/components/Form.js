import React, { useState } from "react";
import Loader from "./Loader";
import { createTodo } from "../services/api";

const Form = ({ todos, getAllTodos }) => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState({ title: "", user: "melihyelman" });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    if (input === "") {
      alert("Please provide a enter todo");
      setInput("");
    } else if (todos.find((todo) => todo.title === input)) {
      alert("Todo already declared");
      setInput("");
    } else {
      setTodo((todo.title = e.target[0].defaultValue));
      try {
        await createTodo(todo);
      } catch (err) {
        setError(err);
      }
      setInput("");

      setTodo({ title: "", user: "melihyelman" });
      getAllTodos();
    }

    setLoading(false);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        type="text  "
        value={input}
        onChange={handleInput}
        className="todoInput"
        placeholder="Enter item"
      ></input>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
