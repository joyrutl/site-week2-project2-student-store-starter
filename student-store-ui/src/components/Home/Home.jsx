import * as React from "react"
import "./Home.css"
import ProductCard from "../ProductCard/ProductCard"
import ProductGrid from "../ProductGrid/ProductGrid"
import { useState } from "react";

export default function Home({ productCard, setShoppingCart, shoppingCart }) { // deconstructing prop
  
  // search bar user input 
  const [search, setSearch] = useState(""); 

  // filter the cards
  const [filteredData, setFilteredData] = useState(productCard); 
  const [categories, setCategories] = useState([])
  
  const handleSearch = (event) => {
    event.preventDefault(); // prevents the page forcing refresh + errors
    setSearch(event.target.value); // set search the user input 
    setFilteredData( // filters the product card to match the search 
      productCard.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase()) // makes lower case, so all searches appear regardless of cap
      )
    );
  };

  // Category Select
  const handleCategorySelect = (category) => {
    if (category === ""){
      setFilteredData(productCard);
    }
    else{ 
      const filteredProducts = productCard.filter( // filters the products that have a category that matched the selected category
        (item) => item.category === category
      ); 
      setFilteredData(filteredProducts); // display 
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
      <ProductGrid productCard={filteredData} shoppingCart= {shoppingCart} setShoppingCart = {setShoppingCart} />
      <div id="about">
      
      {/* About section */}

      <div className='about-contact' id="About">
      <div className="about-section">
        <h1 className="about">About</h1>
        <p> The codepath student store offers great products at great prices from a great team and for a great cause.
          We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
          All proceeds go towards bringing high-quality CS education to college students around the country.</p>
      </div>

      {/* Contact section */}
      <div className="contact-section">
        <h1 className="contact">Contact Us</h1>
        <p> Email:
            code@path.org
            Phone:
            1-800-CODEPATH
            Address:
            123 Fake Street, San Francisco, CA</p>
      </div>
      
      </div>
      </div>

    </div>
  )
}
