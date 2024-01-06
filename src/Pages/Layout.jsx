import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Home from "./Home";
const Layout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
