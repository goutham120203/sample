import './App.css'
import React,{ useState } from 'react';

let stock = 10;

function App(){
  let [count, setCount] = useState(0);
return(
  <div className="Wrapper">
    <button disabled={count === 0}onClick={()=>{
      if(count>0){
            setCount(count -1)
      }
    }}>-</button>
    <p>{count}</p>
    <button disabled={count===10} onClick={()=>{
      if(count<stock){
        setCount(count+1)
      }
    }}>+</button>
    
  </div>
)
}
export default App