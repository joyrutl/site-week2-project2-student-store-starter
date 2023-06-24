import React, { useState } from 'react';
import ShoppingCartHooks from '../ShoppingCartHooks/ShoppingCartHooks';
import ShoppingCart from '../ShoppingCart/ShoppingCart';


const Increment = (setCount, count, productCard, shoppingCart, setShoppingCart) => {
  // Increase the count by 1
  setCount(count + 1);

  ShoppingCartHooks

  // Create an object to hold product information
  const addProducts = {} // object that holds product info

  // Retrieve the name, price, quantity, and cost of the product
  const itemName = productCard.name
  const itemPrice = productCard.price
  const itemQuant = count + 2
  const itemCost = count * itemPrice

  // Assign values to the addProducts object properties
  addProducts.productName = itemName
  addProducts.quantity = itemQuant
  addProducts.price = itemPrice
  addProducts.cost = itemCost

  // Update the shopping cart with the new product
  setShoppingCart(addProducts)

  // Log the updated shopping cart
  console.log(shoppingCart)

  return (
    <div></div>
  )
}

export default Increment

// The spread operator is not used in this code.
