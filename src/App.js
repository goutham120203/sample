import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState({
    username: '',
    email:'',
    password: '',
    confirmpassword:''
  });
  const { username, email, password, confirmpassword } = data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e =>{
    e.preventDefault()
    if(username.length <= 5){
      alert("username must be at least 5 characters");
    }
    else if(password !== confirmpassword){
      alert("password is not matching");
    }
    else{
      console.log(data)
    }
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type='text' name='username' value={username} placeholder="Username" onChange={changeHandler} /> <br />
          <input type='text' name='email' value={email} placeholder="Email" onChange={changeHandler} /> <br />
          <input type='password' name='password' value={password} placeholder="Password" onChange={changeHandler} /> <br />
          <input type='password' name='confirmpassword' value={confirmpassword} placeholder="confirmpassword" onChange={changeHandler} /> <br />
          {password !== confirmpassword ? <p>password are not matching</p>:null}
          <input type='submit' name='submit' />
        </form>
      </center>
    </div>
  );
};

export default App;
