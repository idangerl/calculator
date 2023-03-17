import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import Display from "./components/Display";
import { evaluate } from "mathjs";
import HeaderOscar from "./components/HeaderOscar";

function App() {
  const [input, setInput] = useState("0");

  const addInput = (value) => {
    setInput(input === "0" ? value : input + value);
  };

  function handleOperatorClick(value) {
    const lastChar = input[input.length - 1];

    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      setInput(input.slice(0, -1) + value);
    } else {
      setInput(input + value);
    }
  }

  const clearInput = () => {
    setInput("");
  };

  const addResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("enter values");
    }
  };

  return (
    <div className="App">
      <HeaderOscar />
      <div className="container">
        <Display input={input} />
        <div className="fila">
          <Button addInput={addInput}>1</Button>
          <Button addInput={addInput}>2</Button>
          <Button addInput={addInput}>3</Button>
          <Button addInput={handleOperatorClick}>+</Button>
        </div>
        <div className="fila">
          {" "}
          <Button addInput={addInput}>4</Button>
          <Button addInput={addInput}>5</Button>
          <Button addInput={addInput}>6</Button>
          <Button addInput={handleOperatorClick}>-</Button>
        </div>
        <div className="fila">
          {" "}
          <Button addInput={addInput}>7</Button>
          <Button addInput={addInput}>8</Button>
          <Button addInput={addInput}>9</Button>
          <Button addInput={handleOperatorClick}>*</Button>
        </div>
        <div className="fila">
          {" "}
          <Button addInput={clearInput}>C</Button>
          <Button addInput={addInput}>0</Button>
          <Button addInput={addInput}>.</Button>
          <Button addInput={handleOperatorClick}>/</Button>
        </div>
        <div className="fila">
          <ClearButton addInput={addResult}>=</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
