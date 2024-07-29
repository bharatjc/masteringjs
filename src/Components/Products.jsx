import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

function Products({progress, setProgress}) {
const [products, setProducts] = useState([])

useEffect(()=>{
  setProgress(true)
axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/trending`).then((response)=>{
  setProducts(response.data.data)
  setTimeout(()=>{
    setProgress(false)
  },2000)
}).catch(err=>{
  console.log("Error", err)
  setProgress(false)
})
},[setProgress])

  return (
    <>
    <div className='pt-[80px] pb-10 flex justify-center flex-wrap gap-5 container'>
      {
      products.map((product, index)=>{
        return <Card key={index} price = {product.price} code={product.count} name={product.name} image={product.image} progress={progress} _id={product._id}/>
      })
     }
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

