// This is code for the filter and map 
 
import React from 'react';
import './App.css';

const App = () => {
  const arr = [
    {
      id: 1,
      title: "React.js"
    },
    {
      id: 2,
      title: "node js"
    },
    {
      id: 3,
      title: "express"
    },
    {
      id: 4,
      title: "angular"
    }
  ];

  const filtered = arr.filter(item => item.title.includes('n'));

  return (
    <div>
      <ul>
        {
          filtered.map(item => <li key={item.id}>{item.title}</li>) // Added key prop
        }
      </ul>
    </div>
  );
}

export default App;