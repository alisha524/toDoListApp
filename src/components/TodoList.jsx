import React, { useState, useEffect } from "react";

const TodoList = (props) => {
  //   const [todosList, setTodosList] = useState([]);
  //   useEffect(() => {
  //     setTodosList(props.todos);
  //   }, [props.todos]);
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <>
            <h4 key={todo.id}>{todo.text}</h4>
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
