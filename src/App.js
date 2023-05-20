import React, { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const [data, setData] = useState("");
  console.log(inputRef1.current);

  // console.log(inputRef1.current.innerText)

  return (
    <div className="App">
      <h1>useRef example</h1>
      <input
        ref={inputRef}
        type="text"
        value="ramuuu"
        onChange={() => setData(inputRef.current.value)}
      />
      <h3>{data}</h3>
      <h3 ref={inputRef1}>Ram</h3>
      <button onClick={() => (inputRef1.current.innerText = "RAMU")}>
        click
      </button>
    </div>
  );
}
