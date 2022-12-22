import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, updateUser, selectLoading } from "./redux/LoginSlice";
import { updateValue } from "./redux/AsyncTodoSlice";
import Welcome from "./components/login/Welcome";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Home from "./components/Home";
import { Box, Fab } from "@mui/material";
import Loading from "./components/login/Loading";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  const loading = useSelector(selectLoading);
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const [themeMode, setThemeMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: themeMode,
    },
  });
  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  //listen for changes to the user auth
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //timer for better ux when loading while logged in
      setTimeout(() => {
        dispatch(updateUser(user ? user.uid : false));
      }, 1500);
    });
  }, []);
  //listen for changes to the values
  useEffect(() => {
    if (currentUser) {
      const q = query(collection(db, currentUser));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const res = [];
        querySnapshot.forEach((doc) => {
          res.push({
            docid: doc.id,
            text: doc.data().text,
            checked: doc.data().checked,
          });
        });
        dispatch(updateValue(res));
      });
      return () => unsubscribe();
    }
  }, [currentUser]);

  return (
    <ThemeProvider theme={darkTheme}>
      
      <CssBaseline />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Box
            sx={{
              height: "100vh",
              width: "100vw",
              // backgroundColor: "#E8EAED",
              margin: 0,
            }}
          >
            <Box
              sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: "#00b7c3",
                // color: "white",
                gap: 2,
                // border: "1px solid red",
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              {currentUser ? (
                <Home />
              ) : (
                <Routes>
                  <Route path="/" element={<Outlet />}>
                    <Route index element={<Welcome />} />
                    <Route path="welcome" element={<Welcome />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="home" element={<Home />} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                  </Route>
                </Routes>
              )}
            </Box>
          </Box>

          <Fab
            aria-label="light/dark mode"
            size="small"
            onClick={toggleTheme}
            style={{
              position: "fixed",
              bottom: 10,
              right: 10,
            }}
          >
            {themeMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </Fab>
        </>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
};

export default App;
