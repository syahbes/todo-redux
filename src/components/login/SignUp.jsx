import {
  styled,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fbSignup } from "../../redux/LoginSlice";

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

const SignUp = () => {
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fbSignup({ email, password }));    
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
        Creat Account
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
        <CssTextField
          id="email"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <CssTextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {/* <Typography variant="body2" gutterBottom>
          Forgot password?
        </Typography> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Button
            color="secondary"
            variant="contained"
            sx={{ textTransform: "none", width: "29ch" }}
            type="submit"
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
            color="secondary"
            variant="contained"
            sx={{ textTransform: "none", width: "29ch" }}
          >
            Log in with Google
          </Button>
        </Box>
        <Typography variant="body2" gutterBottom>
          Have an account?
          <Link
            to="/login"
            style={{
              color: "hotpink",
              textDecoration: "none",
              marginLeft: 10,
            }}
          >
            Log in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
