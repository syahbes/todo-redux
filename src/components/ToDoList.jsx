import { Stack } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { selectAsyncTodo } from "../redux/AsyncTodoSlice";

import ToDo from "./ToDo";

const ToDoList = () => {
  const todos = useSelector(selectAsyncTodo);
  const todoComponents = todos.map((todo) => (
    <ToDo
      key={todo.docid}
      index={todo.docid}
      text={todo.text}
      completed={todo.checked ? true : false}
    />
  ));
  return   <Stack spacing={1.5} marginTop={2}>{todoComponents}</Stack>;
};

export default ToDoList;
