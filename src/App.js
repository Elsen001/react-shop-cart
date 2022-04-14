import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './component/Cart'
import data from './component/data'
import Navbar from './component/Navbar'
import Products from './component/Products'
import "./style/app.scss"

const App = () => {

  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState([]);
  
  
  function getProducts(){
    setProducts(data)
  }


  useEffect(()=>{
      getProducts()
  },[])


  const addToCart =(prd)=>{
    const prdExist = cart.find((item)=>item.id===prd.id)
    if(prdExist){
      setCart(
        cart.map((item)=>item.id===prd.id?{...prdExist,qty:prdExist.qty+1}:item)
      )
    }else{
      setCart([...cart,{...prd,qty:1}])
    }
  }

  const clearItem = (prd) =>{
       return setCart(cart.filter((item)=>prd.id !== item.id)) 
  }

  const deleteCartItem=(prd)=>{
    const prdExist = cart.find((item)=>item.id===prd.id)
      if(prdExist.qty===1){
        setCart(cart.filter((item)=>item.id !==prd.id))
      }else{
        setCart(
          cart.map((item)=>item.id===prd.id?{...prdExist,qty:prdExist.qty-1}:item)
        )
      }
  }


  

  return (
    <BrowserRouter>
    <Navbar cart={cart} />
      <Routes>
        <Route exact path='/' element={<Products products={products} addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart cart={cart} deleteCartItem={deleteCartItem} addToCart={addToCart} clearItem={clearItem} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
