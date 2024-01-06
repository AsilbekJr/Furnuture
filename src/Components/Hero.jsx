import React from "react";
import { Box, Typography } from "@mui/material";
import sofa from "../assets/image/sofa.png";
import gallery from "../assets/image/gallery.png";

const Hero = () => {
  return (
    <Box className="container">
      <Box className="main">
        <Box
          width={"100%"}
          display={"flex"}
          gap={"2rem"}
          p={"2rem 0"}
          sx={{
            flexDirection: {
              lg: "row",
              md: "row",
              sx: "column",
              xs: "column",
            },
          }}
        >
          <Box
            sx={{
              width: { lg: "40%", md: "40%", sm: "100%", xs: "100%" },
              display: "flex",
              flexDirection: "column",
              alignItems: {
                lg: "flex-start",
                md: "flex-start",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                textAlign: {
                  lg: "left",
                  md: "left",
                  sm: "center",
                  xs: "center",
                },
                fontWeight: "600",
                letterSpacing: "1.5px",
                pb: { lg: "1.5rem", md: "1.5rem", sm: "1rem", xs: ".8rem" },
                fontSize: { lg: "35px", md: "35px", sm: "30px", xs: "25px" },
              }}
            >
              Biz bilan uyingizni ko'rkamlashtiring
            </Typography>
            <Typography
              sx={{
                textAlign: {
                  lg: "left",
                  md: "left",
                  sm: "center",
                  xs: "center",
                },
              }}
              variant="p"
              fontSize={{ lg: "17px", md: "17px", sm: "15px", xs: "13px" }}
              color="#E8FFE9"
              fontWeight={"400"}
              letterSpacing={"1px"}
              lineHeight={{ lg: "28px", md: "28px", sm: "20px", xs: "16px" }}
            >
              Bizning barcha mebellarimiz eng yaxshi materiallardan foydalanadi
              va mijozlar uchun tanlovlar taqdim etadi.
            </Typography>
            <Box
              sx={{
                display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                mt: { lg: "3rem", md: "3rem", sm: "2rem", xs: "1.5rem" },
                gap: "1rem",
              }}
            >
              <button className="btn">Sotib olish</button>
              <button className="btn hover">Batafsil</button>
            </Box>
          </Box>
          <Box
            sx={{
              width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
              position: "relative",
            }}
          >
            <Box
              width={"100%"}
              sx={{
                display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                justifyContent: "center",
                alignItems: {
                  lg: "center",
                  md: "center",
                  sm: "flex-start",
                  xs: "flex-start",
                },
              }}
            >
              <Box
                sx={{
                  width: { lg: "200px", md: "200px", sm: "150px", xs: "100px" },
                }}
              >
                <img
                  style={{ width: "100%", objectFit: "cover" }}
                  src={gallery}
                />
              </Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                position: {
                  lg: "absolute",
                  md: "absolute",
                  sm: "relative",
                  xs: "relative",
                },
                top: { lg: "55%", md: "55%", sm: "0", xs: "0" },
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img style={{ width: "80%" }} src={sofa} />
            </Box>

            <Box
              sx={{
                display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
                justifyContent: "center",
                mt: { lg: "3rem", md: "3rem", sm: "2rem", xs: "1.5rem" },
                gap: "1rem",
              }}
            >
              <button className="btn">Sotib olish</button>
              <button className="btn hover">Batafsil</button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
