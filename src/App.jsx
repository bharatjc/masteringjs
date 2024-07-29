import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import RootLayout from "./Components/RootLayout";
import SellerLayout from "./Components/SellerLayout";
import Cart from "./Pages/Cart";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setReduxUser } from "./redux/slices/userSlice";
import { SELLER } from "./constants/role";
import Dashboard from "./Pages/seller/Dashboard";
import Products from "./Pages/seller/Products"
import CreateProduct from "./Pages/seller/CreateProduct";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(
    localStorage.getItem("access_token") ? true : false
  );
  const [progress, setProgress] = useState(true);
  const dispatch = useDispatch();

  let reduxUser = useSelector((store) => {
    return store.user.value;
  });

  // let reduxUser = {name: "sellername", role: "seller"}

  let router;
  router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout userData={userData} setUserData={setUserData} />,
      children: [
        {
          path: "/",
          element: <Home progress={progress} setProgress={setProgress} />,
        },
        {
          path: "login",
          element: <Login setUserData={setUserData} />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "*",
          element: <PageNotFound/>
        }
      ],
    },
  ]);

  if (reduxUser?.role == SELLER) {
    router = createBrowserRouter([
      {
        path: "",
        element: <SellerLayout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "products",
            children:[
              {
                path: "",
                element: <Products />,
              },
              {
                path: "add",
                element: <CreateProduct />
              },
              {
                path: "edit/:slug",
                element: <CreateProduct />,
              }
            ] 
          },
        ],
      },
    ]);
  }

  useEffect(() => {
    let access_token = localStorage.getItem("access_token");
    if (access_token) {
      axios
        .get(`https://ecommerce-sagartmg2.vercel.app/api/users/get-user`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((res) => {
          dispatch(setReduxUser(res.data));
          setIsLoading(false);
        })
        .catch((err) => {
          localStorage.removeItem("access_token");
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <img src="./src/assets/loading.gif" alt="loading" />
      </div>
    );
  }

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
