import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState, useParams} from "react";
import axios from "axios"
import ProductDetail from "../ProductDetail/ProductDetail"

export default function App() {
  
  const [productCard, setProductCard] = useState([]); 
  
  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response)=> {
        setProductCard(response.data.products); 
      })
      .catch((error)=> {
        console.error(error); 
      }); 
  }, []); 

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          {/* <Home 
          productCard={productCard} /> */}
          <Routes>
            <Route path="/" element={<Home productCard={productCard} />}/>
            <Route path = "/products/:productId" element={<ProductDetail/>}/>
            <Route path= "*" />
            <Route path= "/about"/>
            <Route path= "/contact" />
            <Route path= "/buy-now" />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
