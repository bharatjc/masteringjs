import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
import Highlights from "../Components/Highlights";


function Home({progress, setProgress}) { 
  return (
    <>
      <Hero />
      <Products progress={progress} setProgress={setProgress}/>
      <Highlights progress={progress} setProgress={setProgress}/>
    </>
  );
}

export default Home;
