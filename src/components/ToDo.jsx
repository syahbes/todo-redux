import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { remove, toggle } from "../redux/ToDoSlice";

const ToDo = (props) => {
  //temp :
  const [rtl, setRtl] = useState(false);
  //

  const dispatch = useDispatch();

  const { text, completed, index } = props;

  const removeToDo = () => {
    dispatch(remove(index));
  };

  const toggleToDo = () => {
    dispatch(toggle(index));
  };

  return (
    <div>
      <Stack
        direction={rtl ? "row-reverse" : "row"}
        spacing={2}
        justifyContent="space-between"
      >
        <FormGroup>
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
