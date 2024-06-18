
import { useEffect, useState } from 'react';
import './App.css'
import Themebtn  from './Components/Themebtn'

import { ThemeProvider } from './contexts/theme'
import Cards from './Components/Cards';

function App() {

  const[themeMode, setThemeMode] = useState("light");
  const lightMode = ()=>{
    setThemeMode("light")
  }
  
  const darkMode = ()=>{
    setThemeMode("dark")
  }
 
useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)

 
}, [themeMode])

  return (
    <ThemeProvider value={themeMode, lightMode,  darkMode }>
   
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Cards/>
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
