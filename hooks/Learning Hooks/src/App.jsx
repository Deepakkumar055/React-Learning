import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += " !@#$%^&*()-{}[]?'?`~|";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly />
        <button className='bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-2'>
          <input type="range"
            min="4"
            max="20"
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value);
            }} />
          <label>length: {length}</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type="checkbox"
            checked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }} />
          <label>numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type="checkbox"
            checked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }} />
          <label>characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
