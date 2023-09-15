import React, { useEffect, useState } from "react";
import Hero from '../../components/Header/Hero/Hero'
import Product from '../../components/Products/Product'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import Stats from '../../components/StatCards/Stats'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  const [products, setProducts] = useState([]);

    useEffect(()=>{
  const fetchProducts= async () =>{
    const response=await fetch("https://fakestoreapi.com/products");
    const data=await response.json();
    setProducts(data)
  }
  fetchProducts()
  } ,[])

  return (
    <div>
     <Hero/>
     <div className="flex flex-col text-center w-full ">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
    </div>
    {
      products.length > 0 ?
      <Product products={products}/>
      :
      <div>Loading ... </div>
    }
     <Product/>
     <FeatureCard/>
     <Stats/>
   
    </div>
  )
}

export default Home
