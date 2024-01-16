import React from "react";
import Header from './component/header'
import './App.css'
import Swipers from './component/swiper'
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
])
function App() {

  return (
    
     <RouterProvider router={router}></RouterProvider>
    
  )
}

export default App
