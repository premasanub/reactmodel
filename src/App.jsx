import React,{ useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";


const App = () => {
 const [products,setProducts]=useState([]);

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

  return (
  
    <>
   <Navbar/>
   <ProductList products={products}/>
    </>
  );
};

export default App;