import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="w-full md:h-[calc(100vh-120px)]">
        <div className="h-[80px] w-full bg-[#F6F5FF] flex py-3 flex-col">
          <p className="text-[22px] container font-bold">My Account</p>
          <div className="container text-[12px] flex gap-2">
            <Link to="/">Home.</Link>
            <p>Pages.</p>
            <p className="text-[#FB2E86]">My Account</p>
          </div>
        </div>

        <div className="flex justify-center py-10 container">
          <div className="p-[38px] bg-[#F8F8FB] flex justify-center flex-col gap-[15px] text-[#9096B2] text-[14px] rounded-md">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[20px] font-bold text-black">Login</h2>
              <p>Please login using account detail below.</p>
            </div>
            <input
              className="p-2 w-full border-[1px] border-[#C2C5E1]"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="p-2 w-full border-[1px] border-[#C2C5E1]"
              type="text"
              placeholder="Password"
            />
            <div className="">Forgot your password?</div>
            <button className="w-full bg-[#FB2E86] h-9 rounded-md text-white">
              Sign In
            </button>
            <h2>Don’t have an Account?Create account</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
