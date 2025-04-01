import React,{useState} from "react";

let price = 3000;
function App(){
let [name, setName]=useState("iPhone");
return(
  <>
    <h1>Moblie:{name}</h1>
    <p>Price:{price}</p>
    <input id="text"/>
    <button onClick={()=>{
      let p = document.getElementById('text').value;
      setName(p)
    }}>Click</button>
  </>
)
}
export default App