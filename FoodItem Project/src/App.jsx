import FoodItem from "./components/FoodItem"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
function App() {

  return (
    <>
      <h1 className="text-center text-uppercase">Food Item Game</h1>
      <div id="wrapper" className="container">
        <FoodItem name="Apple" desc="Apples are a type of fruit that grow on trees."></FoodItem>
        <FoodItem name="Mango" desc="Mangos are a type of fruit that grow on trees." img="true"></FoodItem>
        <FoodItem name="Grapes" desc="Grapes are a type of fruit that grow on trees." ></FoodItem>
      </div>
    </>
  )
}

export default App
