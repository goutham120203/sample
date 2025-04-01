import './App.css'
import React from "react";

function App(){
return(
  <div className="Wrapper">
    <h1>Change the backgroundColor</h1>
    <input type="color" onChange={(e)=>{document.body.style.backgroundColor=e.target.value}}/><br></br>
    
  </div>
)
}
export default App