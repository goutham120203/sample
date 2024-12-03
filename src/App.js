
import React from 'react';
import './App.css'

const App = () => {
  const arr = ["java", "react", "springboot", "mongo"];
  return (
    <div>
      <ul>
        {
          arr.map(
            (value,index) => <li key={index}>{value}</li>
          )
        }
      </ul>
    </div>
  );
};

export default App;

