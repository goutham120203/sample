import {createContext, useState} from 'react';
import Parent from './Parent';

export const context = createContext()
 
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
  <context.Provider value={message}>
     <Parent /> 
  </context.Provider>
    
   </div>
  )


}

export default App