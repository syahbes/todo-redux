import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <Box
      sx={{
        maxWidth: "840px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        margin: "auto",
        padding: "15px 30px",
        minHeight: "100vh",
        backgroundColor: "#b3b3b3",
      }}
    >
      <CssBaseline />
      <ToDoForm />
      <ToDoList />
    </Box>
  );
};

export default App;
