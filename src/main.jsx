import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <ThemeProvider theme={darkTheme}>
    <CssBaseline /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </Provider>
);
