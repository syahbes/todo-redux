import Box from '@mui/material/Box';
import React, { useState } from 'react'
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  
  const addToDo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const toggleToDo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeToDo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Box sx={{ maxWidth: "840px", display: "flex", flexDirection:"column", justifyContent:'center', margin:"auto", padding:"0 30px"}}>
      <ToDoForm addToDo={addToDo} />
      <ToDoList todos={todos} toggleToDo={toggleToDo} removeToDo={removeToDo} />
    </Box>
  );
}

export default App