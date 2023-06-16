import React, {useEffect, useState} from 'react'
import "./ProductCard.css"
import { Link } from "react-router-dom"
/*
Props: 
- product - a product object.
- productId - a number representing the id of the product.
- quantity - the quantity for this product found in the shoppingCart.
- handleAddItemToCart - the handler function defined in the App.jsx component.
- handleRemoveItemToCart - the handler function defined in the App.jsx component.
- showDescription - a boolean value that determines whether or not to show the description.

Renders/ Displayed on Cards: 
- img
- name className="product-name"
- price className="product-price"
On Hover: 
- two button elements:
    - add className="add" -- should call {handleAddItemToCart}
    - remove className="remove" -- should call {handleRemoveItemFromCart}
- quant of items:
    - className="product-quantity"
*/

const ProductCard = ({productCard}) => {
    
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // increment count by one when call this function
  };

  const decrement = () => {
    setCount(count - 1); // decrement count by one when call this function
  };

  return (

      <div className="product-card">
      <div className='show'>
        <img className="product-img" src={productCard.image}/>
        <p className="product-name"> {productCard.name}</p>
        <p className="product-price"> ${(Math.round(productCard.price*100) / 100).toFixed(2)}</p>
        </div>
        <div className='show-count'>
          <button onClick={increment}>+</button>
          <button className="count">{count}</button>
          <button onClick={decrement}>-</button>
        <div className='hidden-btns'>
          <Link to={`/products/${productCard.id}`}>
            <button>View Details</button>
          </Link>
        </div>
        </div>
      </div>
  )
}

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_display_element_hover

export default ProductCard

//  <Link to={`/products/${productCard.id}`}>