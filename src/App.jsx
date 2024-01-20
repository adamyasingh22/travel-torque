import React from "react";
import Header from './component/header'
import './App.css'
import Swipers from './component/swiper'
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Login from "./pages/login";
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
  }
])
function App() {

  return (
    
     <RouterProvider router={router}></RouterProvider>
    
  )
}

export default App
