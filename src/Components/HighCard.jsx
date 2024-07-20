import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function HighCard({progress, image, name, price}) {
  return (
    <div className='w-[285px] h-[280px] shadow-xl high-card'>
      <div className='h-[80%] bg-[#F7F7F7] bg-cover overflow-hidden'>
        {
          progress?<Skeleton className='h-full'/>:<img className='h-full w-full' src={image} alt="" />
        }
      </div>
      {
        progress?<Skeleton className='mt-2 h-7'/>:<div className='flex justify-between p-2'>
        <p className='text-[#151875] text-[14px] font-semiboldbold'>
          {name}</p>
        <p className='text-[#151875] text-[14px] font-semiboldbold'>${price}.0<span className='ml-2 text-[#FB2448] line-through'>${price}-{7.5}</span></p>
      </div>
      }
    </div>
  )
}

export default HighCard
