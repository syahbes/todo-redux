import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/LoginSlice";
import { fbAddTodo, updateValue } from "../redux/AsyncTodoSlice";
import { Box, IconButton, Button, TextField, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const ToDoForm = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(fbAddTodo({ currentUser, value }));
      setValue("");
    }
  };

  
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Sign-out successful. You can add any additional logic here, such as updating the UI or navigating to a different page.
      dispatch(updateValue([]));

    } catch (error) {
      // An error happened. You can add any error handling logic here.
    }
  };
  

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        // "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        //  id="outlined-basic"
        label="To Do..."
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // sx={{ marginTop: "10px"}}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            gap: "10px"
            
          }}
        >

          <IconButton
            color="primary"
            aria-label="remove"
            component="label"
            size="small"
            onClick={handleSignOut}
          >
            <LogoutIcon />
          </IconButton>
          <Typography variant="body2" gutterBottom>
            Sign out
          </Typography>
        </span>
        <Button variant="outlined" size="small" type="submit">
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default ToDoForm;
