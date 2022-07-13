import React, { useState } from "react";

const TodoList = (props) => {
  const [editing, setEditing] = useState(false);
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <>
            {editing ? (
              <>
                <input type="text"></input>
                <button
                  onSubmit={() => {
                    props.onEdit();
                  }}
                >
                  Save this{" "}
                </button>
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
                    setEditing(true);
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
