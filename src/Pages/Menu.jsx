import React from "react";
import logo from "../assets/image/decor.png";
import discount from "../assets/image/discount.png";
import furniture from "../assets/image/furniture.png";
import bath from "../assets/image/bath.png";
import lamp from "../assets/image/lamp.png";
import logo1 from "../assets/image/logo1.jpg";
import logo2 from "../assets/image/logo2.jpg";
import logo3 from "../assets/image/logo3.png";
import logo4 from "../assets/image/logo4.png";
import {
  Box,
  List,
  ListItem,
  Divider,
  Typography,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Drawer,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Close, FavoriteBorder, ShoppingCart } from "@mui/icons-material";
const InfoMenu = ({ drawerOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {/* Your drawer content goes here */}
        <div style={{ width: 400 }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              padding: "15px",
              alignItems: "center",

              backgroundColor: "#66a96b",
            }}
          >
            <IconButton
              onClick={toggleDrawer(false)}
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ marginRight: ".5rem" }}
            >
              <Close
                sx={{
                  color: "#fff",
                  fontSize: "20px",
                }}
              />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "28px",
                mr: ".3rem",
              }}
            >
              <img src={logo} style={{ width: "100%" }} />
            </Box>
            <Typography variant="h6" fontWeight={600} color="#fff">
              Elegant
            </Typography>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FavoriteBorder />
                </ListItemIcon>
                <ListItemText primary="Sevimlilar" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Savatcha" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <Box sx={{ p: "15px" }}>
            <Typography variant="h7" fontWeight={600}>
              Asosiy Menu
            </Typography>
            <List>
              <ListItem
                component={Link}
                to="/"
                sx={{ color: "#000", whiteSpace: "nowrap" }}
              >
                <ListItemText primary="Bosh Sahifa" />
              </ListItem>
              <ListItem
                component={Link}
                to="new_pro"
                sx={{ color: "#000", whiteSpace: "nowrap" }}
              >
                <ListItemText primary="Yangi maxsulotlar" />
              </ListItem>
              <ListItem
                component={Link}
                to="contact"
                sx={{ color: "#000", whiteSpace: "nowrap" }}
              >
                <ListItemText primary="Bog'lanish" />
              </ListItem>
            </List>
          </Box>
          <Divider />
          <Box sx={{ p: "15px" }}>
            <Typography variant="h7" fontWeight={600}>
              Bo'limlar
            </Typography>
            <List>
              <ListItem disablePadding sx={{ m: "10px 0" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                      }}
                      src={discount}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Chegirmalar" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ m: "10px 0" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                      }}
                      src={furniture}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Mebellari" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ m: "10px 0" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                      }}
                      src={bath}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Dush" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ m: "10px 0" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                      }}
                      src={lamp}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Chiroqlar" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          <Divider />
          <Box p={"15px"}>
            <Typography variant="h7" fontWeight={600}>
              Hamkorlarimiz
            </Typography>
            <Box>
              <List
                sx={{
                  display: "flex",

                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <ListItem
                  sx={{ cursor: "pointer", m: ".6rem 0", width: "150px" }}
                >
                  <img
                    style={{
                      width: "100%",

                      objectFit: "cover",
                    }}
                    src={logo1}
                  />
                </ListItem>
                <ListItem
                  sx={{ cursor: "pointer", m: ".6rem 0", width: "150px" }}
                >
                  <img
                    style={{
                      width: "100%",

                      objectFit: "cover",
                    }}
                    src={logo2}
                  />
                </ListItem>
                <ListItem
                  sx={{ cursor: "pointer", m: ".6rem 0", width: "150px" }}
                >
                  <img
                    style={{
                      width: "100%",

                      objectFit: "cover",
                    }}
                    src={logo3}
                  />
                </ListItem>
                <ListItem
                  sx={{ cursor: "pointer", m: ".6rem 0", width: "150px" }}
                >
                  <img
                    style={{
                      width: "100%",

                      objectFit: "cover",
                    }}
                    src={logo4}
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </div>
      </div>
    </Drawer>
  );
};

export default InfoMenu;
