
import React from 'react';
import './App.css'

const App = () => {
  const arr = [
  {
    id:1,
    title:"java"
  }, 
  {
    id:2,
    title:"react"
  }, 
  {id:3,
    title:"springboot"
  }, 
  {
    id:4,
    title:"mongo"
  }];
  return (
    <div>
      <ul>
        {
          arr.map(
            (value,index) => <li key={value.id}>{value.title}</li>
          )
        }
      </ul>
    </div>
  );
};

export default App;

