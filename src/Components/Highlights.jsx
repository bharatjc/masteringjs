import React, { useEffect, useState } from "react";
import axios from "axios";
import HighCard from "./HighCard";
import { FaTruck } from "react-icons/fa";
import { RiHandCoinFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { IoMdHelpCircle } from "react-icons/io";

function Highlights({progress, setProgress}) {

  const [latest, setLatest] = useState([])

  useEffect(()=>{
    setProgress(true)
   axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products?per_page=6`).then((response)=>{
    setLatest(response.data.products)
    setTimeout(()=>{
      setProgress(false)
    },2000)
   }).catch(err=>{
    console.log("Eror", err)
    setProgress(false)
   })
  },[setProgress])

  return (
    <div className="flex flex-col justify-center items-center container">
      <h2 className="text-[#151875] text-3xl font-bold mb-[20px]">
        Latest Products
      </h2>
      <ul className="text-[#151875] text-[14px] font-semibold flex h-[25px] justify-between px-12">
        <li>New Arrival</li>
        <li>Best Seller</li>
        <li>Featured</li>
        <li>Special Offer</li>
      </ul>
      <div className="py-[60px] flex justify-center flex-wrap gap-10">
       {
        latest.map((item, index)=>{
          return <HighCard key={index} name={item.name} image={item.image} price={item.price} progress={progress}/>
        })
       }
      </div>
      <h2 className="text-[#151875] text-3xl font-bold mb-[40px] text-center">
        What Shopex Offer!
      </h2>
      <div className="flex justify-center flex-wrap gap-5 mb-[80px]">
        <div className="h-[270px] px-5 w-[215px] flex flex-col justify-center items-center shadow-lg">
          <FaTruck className="text-4xl" />
          <h2 className="text-[20px] #151875 py-3">24/7 Support</h2>
          <p className="text-center text-[14px] text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="h-[270px] px-5 w-[215px] flex flex-col justify-center items-center shadow-lg">
          <RiHandCoinFill className="text-4xl" />
          <h2 className="text-[20px] #151875 py-3">24/7 Support</h2>
          <p className="text-center text-[14px] text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="h-[270px] px-5 w-[215px] flex flex-col justify-center items-center shadow-lg">
          <GrServices className="text-4xl" />
          <h2 className="text-[20px] #151875 py-3">24/7 Support</h2>
          <p className="text-center text-[14px] text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="h-[270px] px-5 w-[215px] flex flex-col justify-center items-center shadow-lg">
          <IoMdHelpCircle className="text-4xl" />
          <h2 className="text-[20px] #151875 py-3">24/7 Support</h2>
          <p className="text-center text-[14px] text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
