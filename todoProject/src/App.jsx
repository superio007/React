import './App.css'
import Appname from './components/Appname'
import TodoAdd from './components/TodoAdd'
import TodoDelete from './components/Todoitem'
import TodoItems from './components/TodoItems';
import { useState } from 'react';
let itemsArr = [
  {
    name : 'Wake Up',
    dueDate : '4/10/2023'
  },
  {
    name : 'Have BreakFast',
    dueDate : '4/10/2023'
  },
  {
    name : 'Get Ready',
    dueDate : '4/10/2023'
  },
  {
    name : 'Go To Office',
    dueDate : '4/10/2023'
  },
  
];
function App() {
  let [item,setItem] = useState(itemsArr);

  function addItem(name,dueDate){
    let newItem = {
      name : name,
      dueDate : dueDate
    }
    setItem([...item,newItem]);
    
  }
  function deleteItem(index){
    let newItem = item.filter((item,ind)=> ind !== index);
    setItem(newItem);
  }
  return (
    <>
      <div className='container'>
          <Appname/>
          <div className="mt-5">
            <TodoAdd addItem={addItem}/>
            <TodoItems list={item} deleteItem={deleteItem}></TodoItems>
          </div>
      </div>
    </>
  )
}

export default App
