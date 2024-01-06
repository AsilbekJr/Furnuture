import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { Box, List, ListItem, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import logo from "../assets/image/decor.png";
import InfoMenu from "../Pages/Menu";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };
  return (
    <Box className="container">
      <Box className="main">
        <InfoMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            padding: {
              lg: "50px 20px",
              md: "30px 20px",
              sm: "20px 20px",
              xs: "20px 20px",
            },
            background: "#66A96B",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: {
                  lg: "1rem",
                  md: "1rem",
                  sm: ".8rem",
                  xs: ".6rem",
                  display: "flex",
                },
              }}
            >
              <Menu
                sx={{
                  color: "#fff",
                  display: "block",
                  fontSize: "25px",
                }}
              />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "40px",
                mr: ".6rem",
              }}
            >
              <img src={logo} style={{ width: "100%" }} />
            </Box>
            <Typography variant="h5" fontWeight={600} color="#fff">
              Elegant
            </Typography>
          </Box>{" "}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <List
              sx={{
                display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
              }}
            >
              <ListItem
                component={Link}
                to="/"
                sx={{ color: "#fff", whiteSpace: "nowrap" }}
              >
                Bosh Sahifa
              </ListItem>
              <ListItem
                component={Link}
                to="about"
                sx={{ color: "#fff", whiteSpace: "nowrap" }}
              >
                Yangi Maxsulotlar
              </ListItem>
              <ListItem
                component={Link}
                to="contact"
                sx={{ color: "#fff", whiteSpace: "nowrap" }}
              >
                Bog'lanish
              </ListItem>
              <ListItem
                component={Link}
                to="LOGIN"
                sx={{ color: "#fff", whiteSpace: "nowrap" }}
              >
                <button className="btn">Login</button>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",

            alignItems: "center",
            width: "100%",
            display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
          }}
        >
          <InputBase
            fullWidth
            sx={{ ml: 1, flex: 1, fontSize: "0.9rem" }}
            placeholder="Maxsulotlarni izlash"
            inputProps={{ "aria-label": "Maxsulotlarni izlash" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon sx={{ fontSize: "20px" }} />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  );
};

export default Header;
