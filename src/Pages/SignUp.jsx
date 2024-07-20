import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [formErrors, setFormErrors] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setFormErrors([]);
    e.preventDefault();
    setIsSubmitting(true)
    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
        role: inputs.role,
      })
      .then(() => {
        toast("Signup success", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
        });
        navigate("/login");
      })
      .catch((err) => {
        let errors = err.response?.data?.errors
        console.log(errors);
        if (err?.response?.status == 400) {
          setFormErrors(formErrors.concat(errors));
        }
        setIsSubmitting(false)
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
        });
      });
  };

  return (
    <div>
      <div className="container my-20">
        <form
          className="max-w-sm mx-auto bg-[#F6F5FF] p-10 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label htmlFor="name" className="form-label">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              required
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            />
             <p className="text-sm text-red-500">
              {formErrors.find(error => error.param === "name")?.msg}
            </p>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="form-label">
              Your email*
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="form-control"
              required
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <p className="text-sm text-red-500">
              {formErrors.find(error => error.param === "email")?.msg}
            </p>
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="form-label">
              Your password*
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="form-control"
              required
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
           <p className="text-sm text-red-500">
              {formErrors.find(error => error.param === "password")?.msg}
            </p>
          </div>
          <div className="mb-5">
            <label htmlFor="role" className="form-label">
              Role*
            </label>
            <select
              name="role"
              className="form-control"
              onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
            >
              <option value="">Select a role</option>
              <option value="buyer">buyer</option>
              <option value="seller">seller</option>
            </select>
          </div>
          <p className="my-4 ">
            Already a user ?{" "}
            <Link to="/login" className="hover:underline text-blue-500">
              login
            </Link>
          </p>
          <button
          disabled = {isSubmitting}
            type="submit"
            className="text-white disabled:bg-blue-300 disabled:cursor-no-drop bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
