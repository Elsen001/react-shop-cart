import React from 'react'
import Product from './Product';
const Products = ({products,addToCart}) => {

  


  return (
    <div className='items'>
      { products && products.map((item, key) => (
        <Product addToCart={addToCart} key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Products