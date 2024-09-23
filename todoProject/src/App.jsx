import './App.css'
import Appname from './components/Appname'
import TodoAdd from './components/TodoAdd'
import TodoDelete from './components/TodoDelete'

function App() {

  return (
    <>
      <div className='container'>
          <Appname/>
          <div className="mt-5">
            <TodoAdd />
            <TodoDelete name="Go to College" Date="4/10/2023"/>
            <TodoDelete name="Buy Milk" Date="4/10/2023"/>
            <TodoDelete name="Do Home Work" Date="4/10/2023"/>
          </div>
      </div>
    </>
  )
}

export default App
