import React, { useState } from "react";

const TodoCard = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const f = {
      id: Math.random() * 100,
      text: input,
      isComplete: false,
    };
    onSubmit(f);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add your tasks here"
          name="taskTextbar"
          value={input}
          onChange={handleChange}
        />
        <button className="todo-button">Add task</button>
      </form>
    </div>
  );
};

export default TodoCard;
