import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/display";
import Buttons from "./components/buttons";
function App() {
  let [display, setDisplay] = useState("");
  function handleButtonClick(value) {
    if(value === "C"){
      setDisplay("");
    }else if (value == "="){
      const result = eval(display);
      setDisplay(result);
    }else{
    setDisplay(display + value);
    console.log(value);
    }
  }
  return (
    <>
      <div className="External_Div">
        <div className="Internal_Div">
          <div>
            <h1 className="text-center text-uppercase">Calculator</h1>
          </div>
          <Display display={display} />
          <Buttons handleButtonClick={handleButtonClick} />
        </div>
      </div>
    </>
  );
}

export default App;
