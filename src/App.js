import {useRef,useState} from 'react'

function App(){
  const[count,setCount]=useState(0);
  const renderCount = useRef(1);

  

  function as(){
    setCount(count+1);
  }

  return(
    <div>
      <p>Clicked {count}</p>
      <p>Component Render {renderCount.current}time</p>
      <button onClick={as}>ClickeMe</button>
      <button onClick={()=>{renderCount.current+=1}}>clicuseref</button>
    </div>
  )
}

export default App