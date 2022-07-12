import React, { useState } from "react";
import TodoCard from "./TodoCard";
import TodoList from "./TodoList";

const MainPage = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (todo) => {
    console.log(todo);
    const item = todos.indexOf(todo);
    const newTodos = [...todos];
    console.log(newTodos);
    newTodos.splice(item, 1);

    setTodos(newTodos);
  };

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }

    setTodos([...todos, todo]);
  };
  return (
    <div>
      <h1>Add your tasks for today!</h1>
      <TodoCard onSubmit={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default MainPage;
