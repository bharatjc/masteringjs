import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout({userData, setUserData}) {
  return (
    <div>
      <Navbar userData={userData} setUserData = {setUserData}/>
      <Outlet />
      <Footer />
    </div>
  );
}
