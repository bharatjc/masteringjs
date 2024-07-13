import React from 'react'

function HighCard() {
  return (
    <div className='w-[320px] h-[280px] shadow-xl high-card'>
      <div className='h-[80%] bg-[#F7F7F7]'></div>
      <div className='flex justify-between py-3'>
        <p className='text-[#151875] text-[14px] font-semiboldbold'>Comfort Handy Craft</p>
        <p className='text-[#151875] text-[14px] font-semiboldbold'>$42.00<span className='ml-2 text-[#FB2448] line-through'>$65.00</span></p>
      </div>
    </div>
  )
}

export default HighCard
