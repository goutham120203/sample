import {useState} from 'react'

const LoggedIn = () =><h1>welcome,user</h1>
const LoggedOut = () =><h1>Please login</h1>

const App = ()=>{
 const [isLoggedin,setIsLoggedIn] = useState(false)
  return(
    <div>
      {isLoggedin?<LoggedIn/>:<LoggedOut/>}
      <button onClick={()=>{setIsLoggedIn(!isLoggedin)}}>{isLoggedin?<p>logout</p>:<p>login</p>}</button>
    </div>
  )
}






export default App;