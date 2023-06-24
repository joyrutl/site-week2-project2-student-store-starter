import { React, useState } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const ShoppingCartHooks = () => {

  const [shoppingCart, setShoppingCart] = useState([]) // Create a state variable 'shoppingCart' initialized as an empty array

  // The 'shoppingCart' state variable holds the list of products in the shopping cart

  return { 
    shoppingCart, // Return the 'shoppingCart' state variable as part of the component's interface
    setShoppingCart, // Return the 'setShoppingCart' function as part of the component's interface
  }
}

export default ShoppingCartHooks
