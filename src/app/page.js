'use client'
import products from '../json/products.json'
import Navbar from "./navbar";
import ProductBox from "./products";
import { useState } from 'react';

export default function Home() {
  const [cart, setCart] = useState([])
  const addToCart = (product) => {
    const item = product.name
    setCart([...cart, item])
  }
   
  const productsStyling = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    padding: "1rem",
    boxSizing: "border-box",
    width: "100%",

  }
  const productItems=products.map((product,index)=>{
    return <ProductBox key={index} name={product.name} price={product.price} image={product.image} addToCart={addToCart}/>
  })
  
  console.log(products)
  return (
    <main>
      <Navbar cart={cart}></Navbar>

      <div style={productsStyling}>{productItems}</div>
    </main>
  );
}
