import React, { useState, useEffect } from "react";
import { Button, Checkbox, Paper, useMantineColorScheme } from "@mantine/core";
import { Group } from "@mantine/core";
const TodoList = (props) => {
  const [editing, setEditing] = useState("");
  const [editedTodo, setEditedTodo] = useState("");
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [dark, setDark] = useState(colorScheme === "dark");

  useEffect(() => {
    setDark(colorScheme === "dark");
  }, [colorScheme]);
  const updateEdit = (todo) => {
    setEditedTodo(todo.text);
    setEditing(todo.id);
  };

  const handleChange = (e) => {
    setEditedTodo(e.target.value);
  };

  const handleSubmit = (e, todo) => {
    e.preventDefault();
    props.onEdit(todo, editedTodo);
    setEditing("");
  };

  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <>
            {todo.id === editing ? (
              <>
                <form
                  className="todoForm"
                  onSubmit={(e) => {
                    handleSubmit(e, todo);
                  }}
                >
                  <input
                    type="text"
                    name="editTextbar"
                    value={editedTodo}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  ></input>
                  <button>Save this</button>
                </form>
              </>
            ) : (
              <Paper
                my={15}
                sx={{ backgroundColor: dark ? "#FCC2D7" : "#32a852" }}
              >
                <Group>
                  <Checkbox
                    id={todo.id}
                    onClick={() => {
                      props.onCheck(todo.id);
                    }}
                  />{" "}
                  <h4
                    style={
                      todo.isComplete ? { textDecoration: "line-through" } : {}
                    }
                    key={todo.id}
                  >
                    {todo.text}
                  </h4>{" "}
                  <Button onClick={() => props.onDelete(todo)}>
                    Delete Task
                  </Button>{" "}
                  <Button
                    onClick={() => {
                      updateEdit(todo);
                    }}
                  >
                    Edit Me
                  </Button>
                </Group>
              </Paper>
            )}
          </>
        );
      })}
    </div>
  );
};

export default TodoList;
