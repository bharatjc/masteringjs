import React from 'react'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Highlights from "./Components/Highlights";
import Banner from "./Components/Banner";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    <Products/>
    {/* <Banner/> */}
      {/* <Highlights/> */}
    </>
  )
}

export default Home

