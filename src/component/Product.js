import React from 'react'

const Product = ({item,addToCart}) => {

  
    
  return (
        <div className='item'>
                <img className='img' src={item.img} alt="" />
                <h2 className='title'>{item.title}</h2>
                <h2 className='price'>{item.price}AZN</h2>
                <div onClick={()=>addToCart(item)} className='btn-cart'>
                    <div className="btn1">SEBETE AT</div>
                    <div className="btn2"><i class="fa-solid fa-cart-arrow-down"></i></div>
                </div>
        </div>
  )
}

export default Product