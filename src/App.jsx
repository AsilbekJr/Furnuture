import React from "react";
import { createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { ThemeProvider } from "@emotion/react";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import { MyContextProvider } from "./context/myDataContext";

const App = () => {
  const fontTheme = createTheme({
    typography: {
      fontFamily: [
        "Lato",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });
  return (
    <MyContextProvider>
      <ThemeProvider theme={fontTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="new_pro" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MyContextProvider>
  );
};

export default App;
