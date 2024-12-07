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
    if(password === confirmpassword){
    console.log(data);
    }
    else{
      console.log("confirmpassword is not matching");
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
          <input type='submit' name='submit' />
        </form>
      </center>
    </div>
  );
};

export default App;
