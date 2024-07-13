import React from 'react'
import Card from './Card'

function Products() {
  return (
    <>
    <div className='pt-[100px] pb-10 flex justify-center flex-wrap gap-5 container'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <div className='my-[50px] flex justify-center'>
    <button className='bg-[#FB2E86]  mr-1 h-[4px] w-7 rounded-xl'></button>
    <button className='bg-[#FB2E86]  mr-1 h-[4px] w-7 rounded-xl'></button>
    <button className='bg-[#FB2E86]  mr-1 h-[4px] w-7 rounded-xl'></button>
    <button className='bg-[#FB2E86]  mr-1 h-[4px] w-7 rounded-xl'></button>
 </div>
    </>
  
  )
}

export default Products

