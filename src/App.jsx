import React from "react";
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Login from "./pages/login";
import Hdetail from "./pages/Hdetail";
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
    path: "/checkout",
    element: <Checkout/>
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
