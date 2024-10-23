import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/container";
import List from "./components/list";
import Input from "./components/Input";
let textToshow = "Player name will be displayed here";
function handleonChnage(event) {
  console.log(event.target.value);
  textToshow = event.target.value;
}
function App() {
  let [itemList, setItemList] = useState([]);
  let [activeItem, setActiveItem] = useState([]);
  function onkeydown(event) {
    if (event.key === "Enter") {
      let playername = event.target.value;
      event.target.value = "";
      setItemList([...itemList, playername]);
    }
  }
  function handleclick(name, event) {
    console.log(name + "" + "is present");
    event.target.classList.remove("btn-danger");
    event.target.classList.add("btn-success");
    let newItems = [...activeItem, name];
    setActiveItem(newItems);
  }
  return (
    <>
      <Container>
        <h1>Students List</h1>
        <Input handleonKeyDown={onkeydown} />
        <p>{textToshow}</p>
        {itemList.length === 0 ? (
          <p>No plyers are available</p>
        ) : (
          itemList.map((item) => (
            <List 
            key={item} 
            name={item} 
            mark={activeItem.includes(item) ? true : false} 
            handleclick={handleclick} />
          ))
        )}
      </Container>
    </>
  );
}

export default App;
