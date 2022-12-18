import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
    <p style={{fontSize:"30px", marginBottom:0}}>☑️</p>
    <Typography variant="body1">Welcome to To-do app</Typography>
      <Typography variant="body1">Log in to continue</Typography>
      <Stack direction={"row"} spacing={2} mt={1}>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          size="small"
          sx={{ textTransform: "none"}}
        >
          Log in
        </Button>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          size="small"
          sx={{ textTransform: "none" }}
        >
          Sign up
        </Button>
      </Stack>
    </>
  );
};

export default Welcome;
