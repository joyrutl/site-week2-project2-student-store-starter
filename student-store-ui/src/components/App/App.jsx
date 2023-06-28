import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState, useParams} from "react";
import ShoppingCartHooks from '../ShoppingCartHooks/ShoppingCartHooks'
import axios from "axios"
import ProductDetail from "../ProductDetail/ProductDetail"
import Footer from "../Footer/Footer"

export default function App() {
  
  const [productCard, setProductCard] = useState([]); 
  const {shoppingCart, setShoppingCart} = ShoppingCartHooks()
  // use axios to get the database
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
          <Navbar />
          <Sidebar shoppingCart= {shoppingCart} setShoppingCart = {setShoppingCart}  />
          <Routes>
            <Route path="/" element={<Home productCard={productCard} shoppingCart= {shoppingCart} setShoppingCart = {setShoppingCart}    />}/> 
            <Route path = "/products/:productId" element={<ProductDetail/>}/>
            <Route path= "*" />
            <Route path= "/about"/>
            <Route path= "/contact" />
            <Route path= "/buy-now" />
          </Routes>
          <Footer/>
  

        </main>
      </BrowserRouter>
    </div>
  )
}
