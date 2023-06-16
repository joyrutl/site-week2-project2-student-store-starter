import * as React from "react"
import "./Home.css"
import ProductCard from "../ProductCard/ProductCard"
import ProductGrid from "../ProductGrid/ProductGrid"
import { useState } from "react";

export default function Home({ productCard }) { // deconstructing prop
  
  const [search, setSearch] = useState(""); 
  const [filteredData, setFilteredData] = useState(productCard); 
  const [categories, setCategories] = useState([])
  
  const handleSearch = (event) => {
    event.preventDefault(); // prevents the page forcing refresh + errors
    setSearch(event.target.value); // set search the user input 

    setFilteredData(
      productCard.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase()) // makes lower case, so all searches appear regardless of cap
      )
    );
  };

  const handleCategorySelect = (category) => {
    if (category === ""){
      setFilteredData(productCard);
    }
    else{
      const filteredProducts = productCard.filter(
        (item) => item.category === category
      ); 
      setFilteredData(filteredProducts);
    }
  }

  
  return (
    <div className="home">
      <div className="search">
        <input 
          type="text" 
          placeholder="Search here..." 
          value ={search}
          onChange= {handleSearch}
          />
        <table>
          <tr>
            <td className="left"><h3 className="subhead">Welcome! Find Your Merch!</h3></td>
            <td className="right">
              <button className="cart-btn"> My Cart </button></td>
          </tr>
          <tr>
            <td className="categories-menu"> <ul>
              <li><button className="categories-btn" 
              value=""
              onClick = {() => handleCategorySelect("")}>All Categories</button></li>
              <li><button className="categories-btn" value="clothing" onClick = {() => handleCategorySelect("clothing")} >Clothing</button></li>
              <li><button className="categories-btn" value="food" onClick = {() => handleCategorySelect("food")}>Food</button></li>
              <li><button className="categories-btn" value="accessories" onClick = {() => handleCategorySelect("accessories")}>Accessories</button></li>
              <li><button className="categories-btn" value="" onClick = {() => handleCategorySelect("tech")}>Tech</button></li>
              </ul>
            </td>
          </tr>
        </table>
        </div>
      <ProductGrid productCard={filteredData}/>


    </div>
  )
}
