import { useState } from "react";
import Home from "./Home";
import Login from "./Components/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "login",
      element: <Login/>
    },
  ]);
  

  return <RouterProvider router={router} />
}

export default App;
