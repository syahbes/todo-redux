import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";




ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CssBaseline />
    <BrowserRouter>
      <App />

    </BrowserRouter>
  </Provider>
);
