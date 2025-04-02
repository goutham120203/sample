import React,{useState} from "react"

function App(){
  let [num, setNum]=useState(100)
  return(
    <>
      <h1>{num}</h1>
      <button onClick={
        ()=>{setNum(200)}
      }>btn</button><br></br>
      <input type="text" onChange={(e)=>{
        let tem=e.target.value
        setNum(tem)
        }}/>
    </>
  )
}

export default App