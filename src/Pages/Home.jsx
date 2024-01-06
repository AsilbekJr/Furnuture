import React from "react";

import Hero from "../Components/Hero";
import Latest from "../Components/Latest";
import "../assets/styles/home.css";

// import { register } from "swiper/element/bundle";
// register();
const Home = () => {
  return (
    <>
      <Hero />
      <Latest />
    </>
  );
};

export default Home;
