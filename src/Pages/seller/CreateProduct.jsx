import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function CreateProduct() {
  const params = useParams();
  let slug = params.slug;

  const [productDetails, setProductDetails] = useState({
    name: "",
    price: 0,
    in_stock: 0,
    image: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    let method = "POST";
    let url = "https://ecommerce-sagartmg2.vercel.app/api/products/";

    if (slug) {
      method = "PUT";
      url = `https://ecommerce-sagartmg2.vercel.app/api/products/${slug}`;
    }

    let formData = new FormData();
    formData.append("name", productDetails.name);
    formData.append("price", productDetails.price);
    formData.append("in_stock", productDetails.in_stock);
    formData.append("image", productDetails.image);


    axios({
      method,
      url,
      data: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => {
        if (slug) {
          toast("Product Updated", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
          });
        } else {
          toast("Product Created", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
          });
        }
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  useEffect(() => {
    if (slug) {
      axios
        .get(`https://ecommerce-sagartmg2.vercel.app/api/products/${slug}`)
        .then((res) => {
          setProductDetails(res.data.data);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
  }, []);

  let productImage = ""
  if(productDetails.image){
    if(typeof(productDetails.image) == "string"){
        productImage = productDetails.image
      }else{
        productImage = URL.createObjectURL(productDetails.image)
      }
  }

  const handleChange = (e)=>{
      const {name, value, files} = e.target
      if (name === "image" && files) {
        setProductDetails({ ...productDetails, [name]: files[0] });
      } else {
        setProductDetails({ ...productDetails, [name]: value });
      }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 text-lg px-40">
      <label htmlFor="name" className="font-semibold">
        Name*
      </label>
      <input
        className="mb-5 p-2 w-full border-[1px] border-[#C2C5E1] h-8 text-sm"
        id="name"
        name="name"
        type="text"
        required
        value={productDetails.name}
        onChange={handleChange}
      />
      <label htmlFor="price" className="font-semibold">
        Price*
      </label>
      <input
        className="mb-5 p-2 w-full border-[1px] border-[#C2C5E1] h-8 text-sm"
        name="price"
        type="number"
        min={0}
        id="price"
        required
        value={productDetails.price}
        onChange={handleChange}
      />
      <label htmlFor="stock" className="font-semibold">
        Stock*
      </label>
      <input
        className="mb-5 p-2 w-full border-[1px] border-[#C2C5E1] h-8 text-sm"
        name="in_stock"
        type="number"
        id="stock"
        required
        value={productDetails.in_stock}
        onChange={handleChange}
      />
      <label htmlFor="image" className="font-semibold">
        Image
      </label>
      <input
        className="mb-5 p-2 w-full border-[1px] border-[#C2C5E1] text-sm"
        name="image"
        type="file"
        id="image"
        onChange={handleChange}
      />
      {productImage && <img className="h-24 w-20" src={productImage} />}
      <button className="bg-blue-500 px-3 py-2 mt-5 text-[16px] text-white rounded-lg">
        {slug ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}

export default CreateProduct;
