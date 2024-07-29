import React from "react";
import { FaHome } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaShopify } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutReduxUser } from "../redux/slices/userSlice";

function SellerLayout() {
  const dispatch = useDispatch();
  let reduxUser = useSelector((reduxStore) => reduxStore.user.value);
  return (
    <div className="bg-[#F2F2F2]">
      <div className="px-20 flex justify-between">
        <div className="w-[20%] h-[100vh] bg-white flex justify-between flex-col px-3 py-5 text-[#15245E] text-sm">
          <h2 className="text-2xl text-[#0D0E43] font-semibold text-center mb-5">
            Hekto
          </h2>
          <ul className="flex flex-col gap-3 h-[100%]">
            <li className="flex gap-5 items-center">
              <FaHome className="text-3xl" />
              <Link to="dashboard">Dashboard</Link>
            </li>
            <li className="flex gap-5 items-center">
              <FaGift className="text-3xl" />
              <Link to="products">Products</Link>
            </li>
            <li className="flex gap-5 items-center">
              <HiOutlineUsers className="text-3xl" />
              <Link>Customers</Link>
            </li>
            <li className="flex gap-5 items-center">
              <FaShopify className="text-3xl" />
              <Link to="products/add">Add Product</Link>
            </li>
            <li className="flex gap-5 items-center">
              <FaHandHoldingDollar className="text-3xl" />
              <Link>Income</Link>
            </li>
            <li className="flex gap-5 items-center">
              <GiProgression className="text-3xl" />
              <Link>Promote</Link>
            </li>
          </ul>
          <div className="border-t-2 pt-3 flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <RxQuestionMarkCircled className="text-2xl" />
              <Link>Help</Link>
            </div>
            <div className="flex gap-5 items-center">
              <LuLogOut />
              <Link
                onClick={() => {
                  dispatch(logoutReduxUser());
                }}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[57%] bg-transparent p-5 bg-white text-2xl text-[#0D0E43]">
          <div className="flex items-center gap-3">
            <CiSearch />
            <input
              className="bg-transparent text-[10px] w-[60%]"
              type="text"
              placeholder="Search or type a command"
            />
          </div>
          <Outlet />
        </div>

        <div className="bg-white w-[20%] p-5 text-[#15245E]">
          <div className="flex justify-between items-center mb-10">
            <button className="flex text-sm text-white font-bold items-center gap-1 px-2 py-1 bg-blue-600 rounded-lg">
              <FaPlus /> <Link to="products/add">Create</Link>
            </button>
            <MdEdit className="text-xl" />
            <FaRegBell className="text-xl" />
          </div>

          <div className="flex items-center justify-center mb-10">
            <div className="p-2 border-2 rounded-full mr-3">
              <FaUser />
            </div>
            <p>
              Hi, <span className="text-green-400">{reduxUser.name}</span>
            </p>
          </div>
          <h2 className="text-lg font-semibold text-[#0D0E43] mb-5">
            Popular Products
          </h2>
          <div className="flex justify-between text-sm mb-10">
            <p className="w-[65%]">Products</p>
            <p className="w-[30%]">Earnings</p>
          </div>
          <div>
            <h2 className="mb-5 font-semibold">Comments</h2>
            <p className="text-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut Ut enim ad minim veniam, quis nostrud
              exercitation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerLayout;
