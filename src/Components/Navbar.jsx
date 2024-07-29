import React, { useEffect, useState } from "react";
import { CiMail, CiSearch } from "react-icons/ci";
import { TbUser } from "react-icons/tb";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutReduxUser } from "../redux/slices/userSlice";



// function Navbar({ user, setuser }) {

  // let user = null
  // let setUser = ()=>{}
    function Navbar(){
  let reduxUser = useSelector((reduxStore)=>reduxStore.user.value)
  const cartItems = useSelector((reduxStore)=>{return reduxStore.cart.value})
  const dispatch = useDispatch()

  const [menu, setMenu] = useState(false);
  const [navItems, setNavItems] = useState(false);

  return (
    <header>
      <div className="z-20 relative bg-[#7E33E0]">
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
          <ul className="flex items-center gap-3">
            {reduxUser ?
              (
                <>
                <li className="text-lg text-green-400">{reduxUser.name} has logged in</li>
                <li className="h-7 w-7 flex items-center px-[1px] bg-green-300 rounded-2xl">
                  <img
                    className="h-[90%] w-[90%] rounded-2xl"
                    src="./src/assets/buyer.jpg"
                    alt="buyer image"
                  />
                </li>
                <Link onClick={()=>{
                  dispatch(logoutReduxUser())
                  // setUser(null)
                  // dispatch(setReduxUser(null))
                  // localStorage.removeItem("user")
                }} className="ml-10">Logout</Link>
                <Link className="flex" to="/cart"><BsCart2 className="text-lg" /><p className="text-[#FB2E86]">({cartItems.length})</p></Link> 
                </> 
              )
 : (
                <ul className="flex gap-4 bottom-head">
                  <li>English</li>
                  <li>USD</li>
                  <li className="flex items-center">
                    <Link to="/login">Login</Link>
                    <TbUser className="text-lg ml-1" />
                  </li>
                  <li className="flex items-center">
                    Wishlist <FaRegHeart className="ml-1" />
                  </li>
                </ul>
            )}
          </ul>
          </div>

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
                    <Link to="/login">
                      Login <TbUser className="text-lg ml-1" />
                    </Link>
                  </li>
                  <li className="flex items-center">
                    Wishlist <FaRegHeart className="ml-1" />
                  </li>
                 <Link className="flex" to="/cart"><BsCart2 className="text-lg" />
                 <p className="text-[#FB2E86]">({cartItems.length})</p></Link> 
                </ul>
              </div>
            )}
          </div>

{
  reduxUser? <div className="md:hidden">
  <Link onClick={()=>{
          // setUser(null)
          dispatch(logoutReduxUser())
          // localStorage.removeItem("user")
        }} className="ml-10">Logout</Link>
  </div>:""
}        
          <div className="md:hidden mt-1 ml-2">
            <button disabled = {reduxUser} onClick={() => setMenu(!menu)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </nav>
      </div>

      <div className="bg-white">
        <nav className="flex py-4 justify-between container mx-auto">
          <div className="flex">
            <div className="w-[95px] text-2xl text-[#0D0E43] font-bold mr-8 flex items-center">
              <Link to="/">Hekto</Link>
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
                <li>Contact</li>
                {
                  reduxUser &&
                  <>
                  <li>Orders</li>
                  <li>Cart</li>
                  </>
                }
                
              </ul>
            </div>
            <div className="md:hidden">
              {navItems && (
                <div className="z-50 absolute w-2/5 h-[100vh] bg-slate-100 text-black top-[72px] left-0 shadow-lg">
                  <ul className="p-4 space-y-4">
                    <li className="flex justify-between">
                      <p>Home</p>{" "}
                      <button onClick={() => setNavItems(false)}>
                        <IoClose />
                      </button>
                    </li>
                    <li>Pages</li>
                    <li>Products</li>
                    <li>Shop</li>
                    <li>Contact</li>
                    {
                  reduxUser &&
                  <>
                  <li>Orders</li>
                  <li>Cart</li>
                  </>
                }
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="w-[300px] h-[30px] flex justify-end">
            <div className="flex items-center border-2 border-[#C2C5E1]">
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
