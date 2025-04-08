import axios from "axios";
import { useEffect,useState } from "react"

 
function App() {

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');


    const fetchUsers = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          setUsers(response.data);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch users');
          setLoading(false);
        }
      };


    useEffect(()=>{
        fetchUsers()
    },[]);


    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>

    return(
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((u)=>(
                    <li style={{color:"blue"}} key={u.id}>{u.name}</li>
                ))}
            </ul>
        </div>
    )
  


}

export default App