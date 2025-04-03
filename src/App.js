import { BrowserRouter, Link, useParams,Routes,Route } from "react-router-dom";

const UserProfile = ()=>{
  const {id} = useParams();
  return <h1>user Profile:{id}</h1>
}

function App(){
    return(
      <BrowserRouter>
        <nav>
          <Link to="/user/1" >User 1</Link> | <Link to="/user/2">User 2</Link>
        </nav>
          <Routes>
            <Route path="/user/:id" element={<UserProfile/>}/>
          </Routes>
      </BrowserRouter>
    )
}

export default App