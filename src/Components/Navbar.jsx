import React, { useState } from "react";
import { CiMail, CiSearch } from "react-icons/ci";
import { TbUser } from "react-icons/tb";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [navItems, setNavItems] = useState(false);

  return (
    <header>
      <div className="relative bg-[#7E33E0]">
        <nav className="py-3 text-white flex justify-between container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center">
              <CiMail />
              <p className="ml-2 mr-12">mhhasanul@gmail.com</p>
            </div>
            <div className="flex items-center">
              <LiaPhoneVolumeSolid />
              <p className="ml-2">(12345)67890</p>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-4 bottom-head">
              <li>English</li>
              <li>USD</li>
              
              <li className="flex items-center">
              <Link to= "/login">Login</Link>  <TbUser className="text-lg ml-1" />
              </li>
              <li className="flex items-center">
                Wishlist <FaRegHeart className="ml-1" />
              </li>
              <BsCart2 className="text-lg" />
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenu(!menu)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </nav>
        <div className="md:hidden">
          {menu && (
            <div className="w-1/2 bg-slate-100 text-black fixed top-0 right-0 h-full shadow-lg">
              <ul className="p-4 space-y-4">
                <li className="flex justify-between">
                  <p>English</p>
                  <button onClick={() => setMenu(false)}>
                    <IoClose />
                  </button>
                </li>
                <li>USD</li>
                <li className="flex items-center">

                <Link to="/login">Login <TbUser className="text-lg ml-1" /></Link>  

                </li>
                <li className="flex items-center">
                  Wishlist <FaRegHeart className="ml-1" />
                </li>
                <BsCart2 className="text-lg" />
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white">
        <nav className="flex py-4 justify-between container mx-auto">
          <div className="flex">
            <div className="w-[95px] text-2xl font-semibold mr-8 flex items-center">
              Hekto{" "}
              <button onClick={() => setNavItems(!navItems)}>
                <GiHamburgerMenu className="md:hidden text-lg ml-1" />
              </button>
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-4 mt-2">
                <Link to="/">Home</Link>
                <li>Pages</li>
                <li>Products</li>
                <li>Blog</li>
                <li>Shop</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="md:hidden">
              {navItems && (
                <div className="absolute w-2/5 h-[100vh] bg-slate-100 text-black top-[72px] left-0 shadow-lg">
                   <ul className="p-4 space-y-4">
                <li className="flex justify-between"><p>Home</p> <button onClick={() => setNavItems(false)}>
                <IoClose /></button></li>
                <li>Pages</li>
                <li>Products</li>
                <li>Blog</li>
                <li>Shop</li>
                <li>Contact</li>
              </ul>
                </div>
              )}
            </div>
          </div>

          <div className="w-[300px] h-[30px] flex justify-end">
            <div className="flex items-center border-2 border-[#7E33E0]">
              <input className="h-5 w-[170px]" type="text" />
              <div className="bg-[#FB2E86] w-9 h-7 flex justify-center items-center">
                <IoSearchOutline className="text-xl text-white" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
