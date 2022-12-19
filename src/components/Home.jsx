import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/LoginSlice";

import ToDoForm from "./ToDoForm"
import ToDoList from "./ToDoList"
import { Box } from "@mui/material";

const Home = () => {
   const currentUser = useSelector(selectUser);
  if (!currentUser) {
    return <Navigate to="/welcome" replace />;
  }

  return (
      <Box
      sx={{
        // maxWidth: "840px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        // margin: "auto",
        padding: "15px 20px",
        minHeight: "100vh",
        // backgroundColor: "#b6b6b6",
        width: "100%",
      }}
    >
        <ToDoForm />
        <ToDoList />
    </Box>
    
    
    
    

 
  );
};

export default Home;
