import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/slices/cartSlice";

function Card({ progress, image, name, code, price, _id }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-[219px] h-[360px] shadow-lg rounded-lg bg-cover overflow-hidden pb-5">
        <div className="h-[65%] bg-[#F6F7FB]">
          {progress ? (
            <Skeleton className="h-full" />
          ) : (
            <img className="h-full w-full" src={image} alt="" />
          )}
        </div>
        <div className="px-3">
          <h2 className="text-[18px] text-center text-[#FB2E86] font-semibold py-3">
            {progress ? <Skeleton className="w-[70%]" /> : name}
          </h2>
          {progress ? (
            <Skeleton className="ml-20 w-[30%]" />
          ) : (
            <div className="flex justify-center">
              <button className="bg-green-500 mr-1 h-[4px] w-4 rounded-xl"></button>
              <button className="bg-[#FB2E86]  mr-1 h-[4px] w-4 rounded-xl"></button>
              <button className="bg-blue-950 mr-1 h-[4px] w-4 rounded-xl"></button>
            </div>
          )}
          {progress ? (
            <Skeleton className="ml-14 w-[50%]" />
          ) : (
            <p className="text-center text-[#151875] py-2 text-[12px] font-medium">
              Code - Y523201{code}
            </p>
          )}
          {progress ? (
            <Skeleton className="ml-20 w-[30%]" />
          ) : (
            <div className="flex justify-between">
              <p className="text-center text-[12px] font-medium">Rs. {price}</p>
              <button
                className="bg-[#FB2E86] text-sm text-white px-2 py-1 rounded-lg"
                onClick={() => {
                  dispatch(addCartItem({ name, price, code, image, _id }));
                }}
              >
                Add items
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
