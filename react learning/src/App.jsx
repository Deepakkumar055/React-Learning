import React, { useState } from 'react';
import './App.css';


function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="count">
        <h1>Count: {counter}</h1>
        <button onClick={increase}>Increase value</button>
        <button onClick={decrease}>Decrease value</button>
      </div>
     
    </>
  );
}

export default App;
