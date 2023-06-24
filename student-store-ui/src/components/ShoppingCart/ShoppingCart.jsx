import React from 'react';
import "./ShoppingCart.css";
import ShoppingCartHooks from '../ShoppingCartHooks/ShoppingCartHooks';

const ShoppingCart = () => {
  const { shoppingCart } = ShoppingCartHooks(); // Access the shoppingCart state variable

  return (
    <div>
      <p>Shopping Cart</p>
      <ul>
        {shoppingCart.map((item, index) => (
          <li key={index}>
            {item.productName} - Quantity: {item.quantity} - Price: {item.price} - Cost: {item.cost}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
