import React,{ useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";


const App = () => {
 const [products,setProducts]=useState([]);
 const [cart,setCart]=useState([]);

  useEffect(()=>{
  fetchData();
  },[]);

  const fetchData=async()=>{
    try{
      const response=await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      console.log(response.data);
    }catch(error){
      console.error("Error fetching data:",error);
    }
  };
 
  const addToCart=(product)=>{
    const productExists=cart.find((item)=>item.id===product.id);
    if(productExists){
      alert("Product already in cart");
    }else{
      setCart([...cart,product]);
    }
  };
  return (
  
    <>
   <Navbar  cartCount={cart.length}/>
   <ProductList products={products} addToCart={addToCart} />
    </>
  );
};

export default App;