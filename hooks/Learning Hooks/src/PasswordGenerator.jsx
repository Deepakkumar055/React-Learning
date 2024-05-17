import {useCallback, useEffect, useState} from 'react'

const PasswordGenerator = () => {
const[length, setLength] = useState(8);
const[numberAllowed, setNumberAllowed] = useState(false);
const[charAllowed, setCharAllowed] = useState(false);
const[password, setPassword] = useState("")

 const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
        str +="123456789";
    }
    if(charAllowed){
        str +="!@#$%^&*()`~{}[]|\?/";
    }

    for(let i = 1;i<=length;i++){
        let char = Math.floor(Math.random()*str.length)
        pass += str.charAt(char)
    }
    setPassword(pass)
   
},[length, numberAllowed,charAllowed])

useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
   <h1 className='text-white justify-center text-center'>Password Generator</h1>

   <div>
    <input type="text"
    value={password}
    placeholder='Password'
    readOnly />
    <button className='bg-blue-800'>copy</button>
   </div>
   <div>
    <input type="range" 
    min="2"
    max= "20"
    value={length}
    onChange={(e) =>{setLength(e.target.value)}}

     />
     <label className='text-white'>length: {length} </label>
   </div>
   <div>
    <input type="checkbox" 
    checked = {numberAllowed}
    id = 'numberinput'
     onChange={()=>{
        setNumberAllowed((prev)=>!prev)
     }}
     />
     <label className='text-white'>numbers</label>
     
   </div>
   <div>
    <input type="checkbox" 
    checked = {charAllowed}
    id = 'charinput'
     onChange={()=>{
        setCharAllowed((prev)=>!prev)
     }}
     />
     <label className='text-white'>character</label>
     
   </div>

    </>
  )
}

export default PasswordGenerator