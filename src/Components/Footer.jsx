import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full">
      <div className="bg-[#EEEFFB] py-14">
        <div className="container flex flex-col md:flex-row justify-between gap-14">
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-2xl font-bold mb-4">
              Hekto
            </Link>
            <div className="text-[12px]">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="w-2/3 h-8 text-[#8A8FB9] px-3"
              />
              <button className="px-3 h-8 rounded-sm bg-[#FB2E86]">
                  <Link to="/signup">Sign Up</Link>
              </button>
            </div>
            <ul className="flex flex-col text-[12px] text-[#8A8FB9] gap-1">
              <li>Contact Info</li>
              <li>17 Princess Road, London, Greater London NW1 8JR, UK</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-6">Categories</h2>
            <ul className="flex flex-col gap-3 text-[#8A8FB9] text-[12px]">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-6">Customer Care</h2>
            <ul className="flex flex-col gap-3 text-[#8A8FB9] text-[12px]">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-6">Pages</h2>
            <ul className="flex flex-col gap-3 text-[#8A8FB9] text-[12px]">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#E7E4F8]">
<div className="flex items-center justify-between py-3 px-10 md:px-28 container">
<div className="text-[10px] md:text-[12px] text-[#8A8FB9]">©Webecy - All Rights Reserved</div>
<div className="flex gap-3">
<FaFacebook />
<AiFillInstagram />
<AiFillTwitterCircle />
</div>
</div>
      </div>
    </div>
  );
}

export default Footer;
