
import { useEffect, useState } from "react"
import ProductGrid from "./ProductGrid"

import './App.css'


function App(){
  const [products,setProducts]=useState([])

  useEffect(
    ()=>{
      getProducts()
    }
  )

  async function getProducts(){
    let res = await fetch("https://fakestoreapi.com/products");
     let productList= await res.json()

     setProducts(productList);


  }

  if(products.length==0){
    return (<h1>Fetching the Data...</h1>)
  }
    return (
      <>
       <div className="product-list">

        {products.map((p)=><ProductGrid {...p} key={p.id}></ProductGrid>)}

       </div>
      </>
    )
}

export default App