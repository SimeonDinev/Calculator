import React, { useState } from "react";
import Window from "./components/Window";
import Buttons from "./components/Buttons";
import "./App.css";

function App() {
  const [arr, setArr] = useState([]);

  const clickHandler = (buttonValue) => {
    if (buttonValue === "AC") {
      setArr([]);
    } else if (
      Number.isNaN(Number(buttonValue)) &&
      Number.isNaN(Number(arr[arr.length - 1]))
    ) {
    } else if (buttonValue === "=") {
      let x = eval(arr.join(""));
      setArr([x]);
    } else if (buttonValue === "DEL") {
      setArr((prevItems) => prevItems.slice(0, -1));
    } else {
      setArr((prevItems) => [...prevItems, buttonValue]);
    }
  };

  return (
    <>
      <div class="container">
        <h1 class="calculator-title">
          <span class="my">My</span> <span class="calculator">Calculator</span>
        </h1>
      </div>

      <div className="calculator-wrapper">
        <Window value={arr.join("")} />
        <Buttons onButtonClick={clickHandler} />
      </div>
    </>
  );
}

export default App;
