import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./Board.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Hello</p>
      <Board />
    </>
  );
}

export default App;
