import './App.css'
import ListMap from './components/ListMap'
import NameList from './components/NameListMap'
import Test from './components/Test'
import Practice from './components/Practice'
import 'bootstrap/dist/css/bootstrap.min.css'
let names = ['Kiran','Kartik','Ritika','Omkar','Mayur','VeenuGopal'];
// let names = [];
function App() {
  return (
    <>
      <Practice propItem={names}/>
    </>
  )
}

export default App
