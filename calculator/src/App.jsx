import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/display";
import Buttons from "./components/buttons";
function App() {
  return (
    <>
      <div className="External_Div">
        <div className="Internal_Div">
          <div>
            <h1 className="text-center text-uppercase">Calculator</h1>
          </div>
          <Display/>
          <Buttons/>
        </div>
      </div>
    </>
  );
}

export default App;
