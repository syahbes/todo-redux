import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useDispatch } from 'react-redux'
import { add } from '../redux/ToDoSlice'


const ToDoForm = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) { 
      dispatch(add(value));
      setValue("");
    }
  };

  return (
      <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        //  id="outlined-basic"
        label="ToDo"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <span>name and logout</span>
        <Button variant="outlined" size="small" type="submit">
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default ToDoForm;