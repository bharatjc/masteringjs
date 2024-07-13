import React from 'react'

function Card() {
  return (
    <div className='w-[219px] h-[350px] shadow-lg rounded-lg'>
      <div className='h-[65%] bg-[#F6F7FB]'></div>

      <div>
        <h2 className='text-[18px] text-center text-[#FB2E86] font-semibold py-3'>Cantilever chair</h2>
        <div className='flex justify-center'>
          <button className='bg-green-500 mr-1 h-[4px] w-4 rounded-xl'></button>
          <button className='bg-[#FB2E86]  mr-1 h-[4px] w-4 rounded-xl'></button>
          <button className='bg-blue-950 mr-1 h-[4px] w-4 rounded-xl'></button>
          </div>
          <p className='text-center text-[#151875] py-2 text-[12px] font-medium'>Code - Y523201</p>
          <p className='text-center text-[#151875] text-[12px] font-medium'>$42.00</p>
      </div>
    </div>
  )
}

export default Card
