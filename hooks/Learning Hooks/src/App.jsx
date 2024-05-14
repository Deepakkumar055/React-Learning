
import { useState } from 'react'
import './App.css'

function App() {
 
  const [length, setLength] = useState(8);
  const[numberAlllowed, setNumberAllowed] = useState("false");
  const[charAllowed, setCharAllowed] = useState("false");
  const[password, setPAssword] = useState("")


  const passwordGenerator = () =>{}

   return (
    <>
       <h1 className="text-4xl text-center text-white">
      Password Generator
    </h1>
    </>
  )
}

export default App
