import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import List from './components/list'
let itemList = ['Kiran','Kartik','Ritika','Omkar','Mayur','VeenuGopal'];
function App(){
  return (
    <>
        <div className='container'>
            <h1 className='text-center'>Hello World</h1>
            {itemList.map((item)=>(
                <List key={item} name={item}/>
            ))}
            
        </div>
    </>
  )
}

export default App
