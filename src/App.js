
import React,{useState,useEffect} from 'react';
import './App.css';

const App = () => {
const [count,setCount] = useState(0);
useEffect(() => console.log(count),[count])

  return (
    <div>
      <p>{count}</p> <br />
      <button onClick={() => setCount(count + 1)}>click Here</button>
    </div>
  )
}

export default App;
