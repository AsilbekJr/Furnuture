import React, { useContext, useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import right from "../assets/image/right-arrow.png";
import gray_chair from "../assets/image/gray_chair.png";
import gray_chair2 from "../assets/image/gray-chair2.png";
import bedroom from "../assets/image/bedroom.png";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Favorite } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { NewProContext } from "../context/myDataContext";

const Latest = () => {
  const data = useContext(NewProContext);
  console.log(data);
  return (
    <Box
      className="main"
      mt={{ lg: "8rem", md: "7rem", sm: "2rem", xs: "2rem" }}
    >
      <Box
        sx={{
          display: "flex",
          p: "15px",
          flexDirection: { lg: "row", md: "row", sx: "column", xs: "column" },
          height: "auto",
          mb: "3rem",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            mb: { lg: "0", md: "0", sm: "20px", xs: "20px" },
            flexDirection: "column",
          }}
        >
          <Typography
            fontSize={{ lg: "30px", md: "30px", sm: "25px", xs: "23px" }}
            color="initial"
            width={"200px"}
            fontWeight={"600"}
            pb={{ lg: "2rem", md: "2rem", sm: "1rem", xs: "1rem" }}
          >
            Bizning eng so'nggi ishlarimiz
          </Typography>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", width: "200px" }}>
              <Typography
                fontSize={{ lg: "18px", md: "18px", sm: "16px", xs: "16px" }}
                color="initial"
                sx={{ width: "45%" }}
              >
                Sotib olish
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "45%",
                  height: "40px",
                  background: "#66a96b",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "40%" }} src={right} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          freeMode={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide>
              <Card sx={{ width: "100%", height: "100%" }}>
                <CardActionArea
                  sx={{ p: { lg: "1rem", md: ".8rem", sm: "0", xs: "0" } }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="green iguana"
                    sx={{ marginBottom: "2rem", objectFit: "contain" }}
                  />
                  <CardContent>
                    <Box
                      display={"flex"}
                      width={"100%"}
                      flexDirection={"column"}
                      alignItems={"flex-start"}
                    >
                      <h4 className="cart-title">{item.name}</h4>
                      <p className="cart-subtitle">{item.desc}</p>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p className="cart-price">
                        {item.price}
                        {""} so'm
                      </p>
                      <IconButton
                        aria-label=""
                        sx={{ borderRadius: "50%", backgroundColor: "#fff" }}
                      >
                        <Favorite
                          sx={{
                            color: "#fff",
                            fontSize: {
                              lg: "1.5rem",
                              md: "1.2rem",
                              sm: "1rem",
                              xs: "1rem",
                            },
                          }}
                        />
                      </IconButton>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <Card sx={{ width: "100%", height: "100%" }}>
              <CardActionArea sx={{ p: "1rem" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={bedroom}
                  alt="green iguana"
                  sx={{ marginBottom: "2rem", objectFit: "contain" }}
                />
                <CardContent>
                  <Box
                    display={"flex"}
                    width={"100%"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                  >
                    <h4 className="cart-title">Stylish Grey Chair</h4>
                    <p className="cart-subtitle">Stylish Grey Chair</p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p className="cart-price">$23.99</p>
                    <IconButton
                      aria-label=""
                      sx={{ borderRadius: "50%", backgroundColor: "#fff" }}
                    >
                      <Favorite
                        sx={{
                          color: "#fff",
                          fontSize: {
                            lg: "1.5rem",
                            md: "1.2rem",
                            sm: "1rem",
                            xs: "1rem",
                          },
                        }}
                      />
                    </IconButton>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{ width: "100%", height: "100%" }}>
              <CardActionArea sx={{ p: "1rem" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={gray_chair2}
                  alt="green iguana"
                  sx={{ marginBottom: "2rem", objectFit: "contain" }}
                />
                <CardContent>
                  <Box
                    display={"flex"}
                    width={"100%"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                  >
                    <h4 className="cart-title">Stylish Grey Chair</h4>
                    <p className="cart-subtitle">Stylish Grey Chair</p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p className="cart-price">$23.99</p>
                    <IconButton
                      aria-label=""
                      sx={{ borderRadius: "50%", backgroundColor: "#fff" }}
                    >
                      <Favorite
                        sx={{
                          color: "#fff",
                          fontSize: {
                            lg: "1.5rem",
                            md: "1.2rem",
                            sm: "1rem",
                            xs: "1rem",
                          },
                        }}
                      />
                    </IconButton>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide> */}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Latest;
