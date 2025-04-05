import {useState} from 'react';
import Parent from './Parent';


 
function App() {

  const [message,setMessage] = useState("I am from the App component")

  console.log(message)

  return (
   <div>
    <h1>props Drilling Expample</h1>

    <button onClick={()=>{
      setMessage("any help")
    }}>Click Me 
    </button>

    <Parent message={message} /> 
    
   </div>
  )


}

export default App