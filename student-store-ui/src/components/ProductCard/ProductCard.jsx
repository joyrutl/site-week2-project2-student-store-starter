import React, {useEffect, useState} from 'react'
import "./ProductCard.css"
import { Link } from "react-router-dom"
import Increment from '../Increment/Increment'
import Decrement from '../Decrement/Decrement'

// Component responsible for displaying each product card
const ProductCard = ({productCard, shoppingCart, setShoppingCart}) => { // passing in the porduct information from database as a prop
    
  const [count, setCount] = useState(0);

  const decrement = () => {
    if(count === 0) setCount(0); 
    else setCount(count - 1); // decrement count by one when call this function
  };

    // Access the shoppingCart state variable and setShoppingCart function from the ShoppingCartHooks component
  return (

      <div className="product-card">
      <div className='show'>
        {/* display the image */}
        <img className="product-img" src={productCard.image}/> 
        {/* display name */}
        <p className="product-name"> {productCard.name}</p>
        {/* display price */}
        <p className="product-price"> ${(Math.round(productCard.price*100) / 100).toFixed(2)}</p>
        </div>
        <div className='show-count'>
          {/* buttons for count */}
          <button onClick={() => Increment(setCount, count, productCard, shoppingCart, setShoppingCart)}>+</button>
          <button className="count">{count}</button>
          <button onClick={count > 0 ? () => Decrement(setCount, count, productCard, shoppingCart, setShoppingCart) : null}>-</button>
        <div className='hidden-btns'>
          <Link to={`/products/${productCard.id}`}>
            <button className='view-details'>View Details</button>
          </Link>
        </div>
        </div>
      </div>
  )
}



export default ProductCard

