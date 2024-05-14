import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen flex items-center justify-center duration-200" style={{ backgroundColor: color }}>
      <div className="w-90% h-10 bg-green-600 m-3 rounded-l flex">
        <button className="flex-1 justify-center m-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" onClick={() => setColor("red")}>Red</button>
        <button className="flex-1 justify-center m-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" onClick={() => setColor("blue")}>Blue</button>
        <button className="flex-1 justify-center m-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" onClick={() => setColor("green")}>Green</button>
      </div>
    </div>
  );
}

export default App;
