import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const { username, password } = data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e =>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type='text' name='username' value={username} placeholder="Username" onChange={changeHandler} /> <br />
          <input type='password' name='password' value={password} placeholder="Password" onChange={changeHandler} /> <br />
          <input type='submit' name='submit' />
        </form>
      </center>
    </div>
  );
};

export default App;
