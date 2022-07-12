import React, { useState, useEffect } from "react";

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <>
            <input
              type="checkbox"
              id={todo.id}
              onClick={() => {
                props.onCheck(todo.id);
              }}
            ></input>
            <h4
              style={todo.isComplete ? { textDecoration: "line-through" } : {}}
              key={todo.id}
            >
              {todo.text}{" "}
            </h4>
            <button
              onClick={() => {
                props.onDelete(todo);
              }}
            >
              Delete Task
            </button>
          </>
        );
      })}
    </div>
  );
};

export default TodoList;
