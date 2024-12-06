
import React from 'react';
import './App.css'

const App = () => {
  const names = ["cat","cool","dog"];
  const filtered = names.filter(name => name.includes('c'))
  return (
    <div>
      {
        filtered.map(item => <li>{item}</li>)
      }
    </div>
  );
};

export default App;
