import {useState,useEffect} from 'react'

const App = ()=>{
  const [count,setCount] = useState(0)


useEffect(()=>{
  console.log(`render every time:${count}`);
},[count])

return(
  <>
  <h1>Count:{count}</h1>
  <button onClick={()=>{setCount(count+1)}}>button</button>
  </>
)
}

export default App