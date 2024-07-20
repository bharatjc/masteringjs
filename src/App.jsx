import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import RootLayout from "./Components/RootLayout";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
 
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(true)

  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout userData = {userData} setUserData={setUserData}/>,
      children: [
        {
          path: "/",
          element: <Home progress={progress} setProgress={setProgress}/>,
        },
        {
          path: "login",
          element: <Login setUserData = {setUserData}/>,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
  ]);

  useEffect(()=>{
    let user = localStorage.getItem("user")
    if(user){
      setUserData(JSON.parse(user))
      setIsLoading(false)
    }
    else{
      setIsLoading(false)
    }
    },[])

    if(isLoading){
      return <div className="flex h-full w-full items-center justify-center">
        <img src="./src/assets/loading.gif" alt="loading" />
      </div>
    }

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
