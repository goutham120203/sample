import React,{useState} from "react";

function App(){
let [product, setProduct]=useState({name:"iphone",price:30000});
return(
  <>
    <h1>Moblie:{product.name}</h1>
    <p>Price:{product.price}</p>
    <input id="text"/>
    <button onClick={()=>{
      let p = document.getElementById('text').value;
      setProduct({name:product.name,price:p})
    }}>Click</button>
  </>
)
}
export default App