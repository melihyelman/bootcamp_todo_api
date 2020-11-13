import axios from "axios";

const instance = axios.create({
  baseURL: "https://5faa6be6b5c645001602a8c0.mockapi.io/api/",
});

export const getTodos = () => {
  return instance.get("/todos");
};
export const createTodo = (todo) => {
  return instance.post("/todos", todo);
};
export const updateTodo = (id, todo) => {
  return instance.put(`/todos/${id}`, todo);
};
export const deleteTodo = (id) => {
  return instance.delete(`/todos/${id}`);
};
