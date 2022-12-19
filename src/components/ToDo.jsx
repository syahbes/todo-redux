import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fbDellTodo, fbToggle } from "../redux/AsyncTodoSlice";
import { selectUser } from "../redux/LoginSlice";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Stack,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDo = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  //temp :
  const [rtl, setRtl] = useState(false);
  //
  const { text, completed, index } = props;

  const removeToDo = () => {
    dispatch(fbDellTodo({ currentUser, index }));
  };

  const toggleToDo = () => {
    dispatch(fbToggle({ currentUser, index, completed }));
  };

  return (
    <div
      style={{
        border: "1px solid #000",
        borderLeft: "3px solid hotpink",
        
        marginBottom: "15px",
        marginTop: "15px",
        boxShadow: "10px 10px",          
        borderRadius: "5px",
        paddingLeft: "10px",
      }}
    >
      <Stack
        direction={rtl ? "row-reverse" : "row"}
        spacing={2}
        justifyContent="space-between"
      >
        <FormGroup
          sx={{
            width: "100%",
            overflow: "hidden",
            // ":hover": { backgroundColor: "yellow" }
          }}
        >
          <FormControlLabel
            dir={rtl ? "rtl" : "ltr"}
            control={<Checkbox onClick={toggleToDo} checked={completed} />}
            label={text}
            style={{ textDecoration: completed ? "line-through" : "none" }}
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
      </Stack>
    </div>
  );
};

export default ToDo;
