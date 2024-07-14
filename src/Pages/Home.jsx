import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
import Highlights from "../Components/Highlights";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Highlights/>
      <Footer />
    </>
  );
}

export default Home;
