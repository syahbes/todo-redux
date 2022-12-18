import { styled, Box, Typography, TextField, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fbLogin } from "../../redux/LoginSlice";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "hotpink",
  },
  "& label": {
    color: "hotpink",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "hotpink",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "hotpink",
    },
    "&:hover fieldset": {
      borderColor: "hotpink",
    },
    "&.Mui-focused fieldset": {
      borderColor: "hotpink",
    },
  },
});

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fbLogin({ email, password }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome Back
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
        }}
        // noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          vallue={email}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Typography variant="body2" gutterBottom>
          Forgot password?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "none", width: "29ch" }}
            onClick={handleSubmit}
          >
            Continue
          </Button>
          <Stack direction={"row"} alignItems={"center"}>
            <hr style={{ width: "30%", height: "1px" }} />
            or
            <hr style={{ width: "30%", height: "1px" }} />
          </Stack>
          <Button
            variant="contained"
            sx={{ textTransform: "none", width: "29ch" }}
          >
            Log in with Google
          </Button>
        </Box>
        <Typography variant="body2" gutterBottom>
          Don't have account?
          <Link
            to="/signup"
            style={{
              // color: "hotpink",
              textDecoration: "none",
              marginLeft: 10,
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;