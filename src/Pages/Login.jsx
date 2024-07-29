import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setReduxUser } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";


function Login() {

const [user, setUser] = useState({
  email: "",
  password: ""
})

const [isSubmitting, setIsSubmitting] = useState(false)
const navigate = useNavigate()
const dispatch = useDispatch()


function handleSubmit(e){

  e.preventDefault()
  setIsSubmitting(true)
  axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/login",{
    email: user.email,
    password : user.password
  }).then((res)=>{
    toast("Logged in successfully", {position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
    })
    // setUserData(res.data.user)
    dispatch(setReduxUser(res.data.user))
    localStorage.setItem("access_token", res.data.access_token)
    // localStorage.setItem("user",JSON.stringify(res.data.user))
    navigate('/');
  }).catch((err)=>{
      if(err.response.status){
        toast.error(err.response.data.msg, {autoClose: 2000})
      }
      else{
        toast.error('Something went wrong!',{position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,})
          console.log("Error:", err)
      }
      setIsSubmitting(false)
  })
}


  return (
    <div>
      <div className="w-full">
        <div className="w-full bg-[#F6F5FF] flex py-3 flex-col">
          <p className="text-[22px] container font-bold">My Account</p>
          <div className="container text-[12px] flex gap-2">
            <Link to="/">Home.</Link>
            <p>Pages.</p>
            <p className="text-[#FB2E86]">My Account</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className=" flex justify-center py-16 container">
          <div className="p-[38px] bg-[#F8F8FB] flex justify-center flex-col gap-[15px] text-[#9096B2] text-[14px] rounded-md">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[20px] font-bold text-black">Login</h2>
              <p>Please login using account detail below.</p>
            </div>           
            <input
              className="p-2 w-full border-[1px] border-[#C2C5E1]"
              type="email"
              placeholder="Email Address"
              onChange={(e)=>
                setUser({...user, email: e.target.value})
              }
              required
            />
            <input
              className="p-2 w-full border-[1px] border-[#C2C5E1]"
              type="password"
              placeholder="Password"
              onChange={(e)=>{
                setUser({...user, password: e.target.value})
              }}
              required
            />
            <div className="">Forgot your password?</div>
            <button disabled = {isSubmitting} className=" bg-[#FB2E86] disabled:bg-pink-300 disabled:cursor-no-drop h-9 rounded-md text-white">
              Sign In
            </button>
            <h2>Don’t have an Account?Create account</h2>
            <div className="flex justify-center">
            <button className="w-1/3 px-4 bg-green-700 h-9 rounded-md text-white">
              <Link to="/signup">Sign Up</Link>
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

    // buyer
// hari123@gmail.com
// h1ri123bhakta


      //  seller
  //  mukesh@seller.com
  //  mukesh@seller