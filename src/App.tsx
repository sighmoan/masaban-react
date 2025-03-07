import { useState } from "react";
import "./App.css";
import Board from "./Board.tsx";
import { createBoard as apiCreateBoard } from "./_apiService.ts";

function App() {
  const [boardId, setBoardId] = useState<string>();

  const createBoard = () => {
    apiCreateBoard().then((data) => {
      //NO
      if (!data) throw new Error("failed to create board");
      const newBoardId = data.split("/")[4];
      setBoardId(newBoardId);
    });
  };

  return (
    <>
      {boardId ? (
        <Board />
      ) : (
        <button onClick={createBoard}>Create a new board</button>
      )}
    </>
  );
}

export default App;
