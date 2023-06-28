import React from 'react';
import "./ShoppingCart.css";
// import ShoppingCartHooks from '../ShoppingCartHooks/ShoppingCartHooks';

const ShoppingCart = (props) => {
  // const { shoppingCart } = ShoppingCartHooks(); // Access the shoppingCart state variable
  console.log(props.shoppingCart)
  let subtotal = 0; 
  let tax = 1.02; 

  {props.shoppingCart.map((item, index) => (
    subtotal = item.cost + subtotal
  ))}

  tax = tax * subtotal

  return (
    <div className='shopping-cart'>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Cost</th>
        </tr>
        {props.shoppingCart.map((item, index) => (
        <tr>
          <td> {item.productName} </td>
          <td> {item.quantity} </td>
          <td> {item.price.toFixed(2)} </td>
          <td> {item.cost.toFixed(2)} </td>
        </tr>
        ))}
      </table>
      <p>Subtotal: {subtotal.toFixed(2)}</p>
      <p className='total'>Total: {tax.toFixed(2)}</p>
    </div>
  );
}

export default ShoppingCart;
