
import React from 'react';
import './App.css'

const App = () => {
  const arr = [1,2,3,4,5];
  const filtered = arr.filter(item => item>3)
  return (
    <div>
      {
        filtered.map(item => <li>{item}</li>)
      }
    </div>
  );
};

export default App;
