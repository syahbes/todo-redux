import React from "react";
import { useSelector } from "react-redux";
import { selectTodo } from "../redux/ToDoSlice";
import ToDo from "./ToDo";

const ToDoList = () => {
  const todos = useSelector(selectTodo)
  // const { todos, toggleToDo, removeToDo } = props;
  const todoComponents = todos.map((todo, index) => (
    <ToDo
      key={index}
      index={index}
      text={todo.text}
      completed={todo.completed ? true : false}
      // toggleToDo={() => toggleToDo(index)}
     // removeToDo={() => removeToDo(index)}
    />
  ));
  return <div>{todoComponents}</div>;
};

export default ToDoList;
