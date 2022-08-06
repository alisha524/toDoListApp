import React, { useState } from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/Icons";
import TodoCard from "./TodoCard";
import TodoList from "./TodoList";

const [colorScheme, toggleColorScheme] = useMantineColorScheme();
const dark = colorScheme === "dark";

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
      <ActionIcon
        onClick={() => {
          toggleColorScheme();
          title = "Toggle color scheme";
        }}
      >
        {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
      </ActionIcon>
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
