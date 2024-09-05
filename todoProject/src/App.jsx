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
            <TodoDelete/>
            <div className="row mb-4">
              <div className="col-5 d-flex">
                <p className='font-bold'>Go to College</p>
              </div>
              <div className="col-5 d-flex ">
                <p className='font-bold'>4/10/2023</p>
              </div>
              <div className='col-2'>
                <button type="submit" className='btn btn-danger delete'>Delete</button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
