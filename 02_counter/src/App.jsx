import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setcounter] = useState(15)

  //let counter = 15

  const addValue= ()=>{
    
    //counter=counter+1;
    setcounter(counter+1)
  }

  const removeValue=()=>{
    setcounter(counter-1)
  }
  

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add value{counter}</button>
     <br/>
      <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
