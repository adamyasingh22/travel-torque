import React from "react";
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Login from "./pages/login";
import Hdetail from "./pages/Hdetail";
import Register from "./pages/register";
import Createpass from "./pages/createpass";
import Forgetpass from "./pages/forgetpass";
import Searchresult from "./pages/searchresult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/createpassword",
    element: <Createpass/>
  },
  {
    path: "/forgetpassword",
    element: <Forgetpass/>
  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
  {
    path: "/Searchresults",
    element: <Searchresult/>
  },
  {
    path: "/detail",
    element: <Hdetail/>
  }
])
function App() {

  return (
    
     <RouterProvider router={router}></RouterProvider>
    
  )
}

export default App
