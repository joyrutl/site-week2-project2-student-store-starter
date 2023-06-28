import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "./ProductGrid.css"

// in the product grid, map the product cards so that for every id, a card is displayed
const ProductGrid = ({productCard, shoppingCart, setShoppingCart}) => {
  
    return (
    <div className='product-grid'>
    <h3 className="best-sellers">Best Sellers</h3>
    <div className="grid-content">
        {productCard.map((productCard, id) => (<ProductCard key={id} productCard={productCard} productId={id} shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart} />))}
    </div>
    </div>
  )
}

export default ProductGrid