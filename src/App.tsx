import { useState } from "react";
import "./App.css";
import Board from "./Board.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Hello</p>
      <Board boardId="abcd-efghj-ijklm-nopqrstuv" />
    </>
  );
}

export default App;
