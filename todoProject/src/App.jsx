import './App.css'
import Appname from './components/Appname'
import TodoAdd from './components/TodoAdd'
import TodoDelete from './components/Todoitem'
import TodoItems from './components/TodoItems';
let itemsArr = [
  {
    name : 'Go to College',
    dueDate : '4/10/2023'
  },
  {
    name : 'Buy Milk',
    dueDate : '4/10/2023'
  },
  {
    name : 'Do Home Work',
    dueDate : '4/10/2023'
  },
];
function App() {

  return (
    <>
      <div className='container'>
          <Appname/>
          <div className="mt-5">
            <TodoAdd />
            {/* <TodoItems list={itemsArr}></TodoItems> */}
            <TodoDelete name="Go to College" Date="4/10/2023"/>
            <TodoDelete name="Buy Milk" Date="4/10/2023"/>
            <TodoDelete name="Do Home Work" Date="4/10/2023"/>
          </div>
      </div>
    </>
  )
}

export default App
