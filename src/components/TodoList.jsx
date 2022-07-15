import React, { useState } from "react";

const TodoList = (props) => {
  const [editing, setEditing] = useState("");
  const [editedTodo, setEditedTodo] = useState("");

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
              <>
                <input
                  type="checkbox"
                  id={todo.id}
                  onClick={() => {
                    props.onCheck(todo.id);
                  }}
                ></input>
                <h4
                  style={
                    todo.isComplete ? { textDecoration: "line-through" } : {}
                  }
                  key={todo.id}
                >
                  {todo.text}
                </h4>
                <button onClick={() => props.onDelete(todo)}>
                  Delete Task
                </button>
                <button
                  onClick={() => {
                    updateEdit(todo);
                  }}
                >
                  Edit Me
                </button>
              </>
            )}
          </>
        );
      })}
    </div>
  );
};

export default TodoList;
