import React, { useState } from 'react';


const Decrement = (setCount, count, productCard, shoppingCart, setShoppingCart) => {
  // Increase the count by 1



  // Create an object to hold product information
  const addProducts = {} // object that holds product info

  // Retrieve the name, price, quantity, and cost of the product
  const itemName = productCard.name
  const itemPrice = productCard.price
  const itemQuant = count - 1
  const itemCost = itemQuant * itemPrice

  // Assign values to the addProducts object properties
  addProducts.productName = itemName
  addProducts.quantity = itemQuant
  addProducts.price = itemPrice
  addProducts.cost = itemCost
  
  //get shopping cart copy 
  let shoppingCartCopy = shoppingCart.slice()
  
  // get product in shoppingcart index
  let productIndex 
  console.log('shoping Cart', shoppingCart)
  console.log('Item name ', itemName)
  let savethis = shoppingCart.filter((product, index) => product.productName == itemName)
  shoppingCart.filter((product, index) => product.productName == itemName?productIndex = index: console.log(product))

  console.log(savethis)
  console.log(`save this ${savethis}`)


// checks if porduct is in card

  if (savethis.length !== 0){
    shoppingCartCopy[productIndex] = addProducts
  }else{
    shoppingCartCopy.push(addProducts)
  }


  if (itemQuant < 1){
    delete shoppingCartCopy[productIndex]; 
  }

  
  //Create new list 
    console.log('shopping cart copy', shoppingCartCopy)
    setCount(count - 1);
    setShoppingCart(shoppingCartCopy)

  console.log('ShoppingCart Copy: ',shoppingCartCopy)
  // Update the shopping cart with the new product
  // setShoppingCart(ShoppingCartArray)

  // Log the updated shopping cart
  console.log(shoppingCart)

  return (
    <div></div>
  )
}

export default Decrement

// The spread operator is not used in this code.
