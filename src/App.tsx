import { useState } from "react";
import "./App.css";
import Board from "./Board.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Hello</p>
      <Board boardId="6c9995fe-9e18-45b1-867b-bc44bdc3691c" />
    </>
  );
}

export default App;
