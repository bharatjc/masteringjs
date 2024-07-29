import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl text-[#0D0E43] font-semibold my-5">
            Dashboard
          </h2>

          <div className="flex justify-between text-[12px] mb-14">
            <h2 className="text-lg font-semibold text-[#0D0E43]">Overview</h2>
            <select name="time" id="">
              <option value="all time">All time</option>
              <option value="all time">8 hours</option>
              <option value="all time">12 hours</option>
              <option value="all time">24 hours</option>
            </select>
          </div>

          <div className="flex justify-between px-14 text-sm mb-14">
            <div>
              <h2>Customers</h2>
              <p className="text-[12px] text-center font-bold">10,243</p>
            </div>
            <div>
              <h2>Income</h2>
              <p className="text-[12px] text-center font-bold">$39,459,780</p>
            </div>
          </div>

          <div className="text-sm mb-10">
            <h2>Welcome to our new online experience</h2>
            <ul className="flex my-5">
              <li className="border-r-2 px-8">
                <FaRegUserCircle className="text-5xl" />
                <p className="text-center text-[10px]">Johnson D.</p>
              </li>
              <li className="border-r-2 px-8">
                <FaRegUserCircle className="text-5xl" />
                <p className="text-center text-[10px]">Didinya J.</p>
              </li>
              <li className="border-r-2 px-8">
                <FaRegUserCircle className="text-5xl" />
                <p className="text-center text-[10px]">Penny L.</p>
              </li>
              <li className="border-r-2 px-8">
                <FaRegUserCircle className="text-5xl" />
                <p className="text-center text-[10px]">Elon M.</p>
              </li>
              <li className="px-5">
                <FaRegUserCircle className="text-5xl" />
                <p className="text-center text-[10px]">Will Smith</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0D0E43]">
              Total income
            </h2>
            <div className="h-32 w-full bg-cover">
              <img
                className="h-full w-full"
                src="./src/assets/bargraph.jpg"
                alt=""
              />
            </div>
          </div>
    </div>
  )
}

export default Dashboard
