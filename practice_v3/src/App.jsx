import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
function App() {
  let [count ,setCount] = useState(0);
  function handleclick(){
    setCount(count+1);
    console.log(count);
  }
  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Button handleclick={handleclick} count ={count}></Button>
      </>
    )
}

export default App
