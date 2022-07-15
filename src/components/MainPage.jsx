import React, { useState } from "react";
import TodoCard from "./TodoCard";
import TodoList from "./TodoList";

const MainPage = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (todo) => {
    const item = todos.indexOf(todo);
    const newTodos = [...todos];
    newTodos.splice(item, 1);
    setTodos(newTodos);
  };

  const editTodo = (todo, editedTodo) => {
    const i = todos.indexOf(todo);
    const newTodos = [...todos];
    newTodos[i].text = editedTodo;
    setTodos(newTodos);
  };

  const checkedTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        todo.isComplete = !todo.isComplete;

        // let index = todos.indexOf(todo);
        // let ele = updatedTodos.splice(index, 1)[0];
        // updatedTodos.splice(updatedTodos.length, 0, ele);
        // console.log(updatedTodos);
      }
      return todo;
    });
    setTodos(updatedTodos);
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
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onCheck={checkedTodo}
        onEdit={editTodo}
      />
    </div>
  );
};

export default MainPage;
