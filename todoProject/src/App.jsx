import './App.css'
import Appname from './components/Appname'
import TodoAdd from './components/TodoAdd'
import TodoDelete from './components/Todoitem'
import TodoItems from './components/TodoItems';
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
  {
    name : 'DO Coding',
    dueDate : '4/10/2023'
  },
];
function App() {
  console.log("main")
  return (
    <>
      <div className='container'>
          <Appname/>
          <div className="mt-5">
            <TodoAdd />
            <TodoItems list={itemsArr}></TodoItems>
          </div>
      </div>
    </>
  )
}

export default App
