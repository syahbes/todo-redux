import React from "react";
import ToDo from "./ToDo";

const ToDoList = (props) => {
  const { todos, toggleToDo, removeToDo } = props;
  const todoComponents = todos.map((todo, index) => (
    <ToDo
      key={index}
      text={todo.text}
      completed={todo.completed ? true : false}
      toggleToDo={() => toggleToDo(index)}
      removeToDo={() => removeToDo(index)}
    />
  ));
  return <div>{todoComponents}</div>;
};

export default ToDoList;
