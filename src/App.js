import React,{useState} from "react";


function App(){
let [count, setCount]=useState(0);
return(
  <>
    <h1>Count:{count}</h1>
    <button onClick={()=>{setCount(++count)}}>Click</button>
  </>
)
}
export default App