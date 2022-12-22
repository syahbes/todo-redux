import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fbDellTodo, fbToggle } from "../redux/AsyncTodoSlice";
import { selectUser } from "../redux/LoginSlice";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { BorderLeft } from "@mui/icons-material";

const ToDo = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const { text, completed, index } = props;

  const removeToDo = () => {
    dispatch(fbDellTodo({ currentUser, index }));
  };

  const toggleToDo = () => {
    dispatch(fbToggle({ currentUser, index, completed }));
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          // border: 1,
          // boxShadow: "5px 5px ",
          // boxShadow: "30px",
          borderRadius: 1,
          borderLeft: "3px solid hotpink",
        }}
      >
        <Button fullWidth sx={{ color: "text.secondary", textTransform: "none" }}>
          <FormGroup
            sx={{
              width: "100%",
              overflow: "hidden",
            }}
          >
            <FormControlLabel
              control={<Checkbox onClick={toggleToDo} checked={completed} />}
              label={text}
              style={{ textDecoration: completed ? "line-through" : "none"}}
            />
          </FormGroup>
          <IconButton
            color="primary"
            aria-label="remove"
            component="label"
            onClick={removeToDo}
          >
            <DeleteIcon />
          </IconButton>
        </Button>
      </Paper>
    </>
  );
};

export default ToDo;
