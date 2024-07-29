import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Products() {
const [products,setProducts] =  useState([])

function fetchData(){
  axios.get("https://ecommerce-sagartmg2.vercel.app/api/products",{
    headers:{
      Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
  })
  .then(res=>{
    setProducts(res.data.products)
  })
}

useEffect(()=>{
  fetchData()
},[])

function deleteProduct(product_id){
axios.delete(`https://ecommerce-sagartmg2.vercel.app/api/products/${product_id}`,{
  headers:{
    Authorization: `Bearer ${localStorage.getItem("access_token")}`
  }
}).then((res)=>{
  toast("Product deleted",{
    autoClose: 2000,
  })
  fetchData()
}
)
}

  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    In Stock
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
              products.map(product=>{
                return <tr key={product._id}>
                  <td className='px-6 py-4'>{product.name}</td>
                  <td className='px-6 py-4'>{product.price}</td>
                  <td className='px-6 py-4'>{product.in_stock}</td>
                  <td className='px-6 py-4'>
                    <button onClick={()=>{
                      deleteProduct(product._id)
                    }} className='border p-2 mr-3'>
                    <MdDelete />
                    </button>
                    <button>
                    <Link to={`/products/edit/${product._id}`}>
                    <FaEdit />
                    </Link>
                    </button>
                  </td>
                </tr>
              })
            }
        </tbody>
    </table>
</div>
  )
}

export default Products
