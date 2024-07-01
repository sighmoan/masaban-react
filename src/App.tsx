import { useState } from "react";
import "./App.css";
import Board from "./Board.tsx";
import { createBoard as apiCreateBoard } from "./_apiService.ts";
import { useNavigate } from "@tanstack/react-router";

function App() {
  const [count, setCount] = useState(0);
  const [boardId, setBoardId] = useState<string>();
  const navigate = useNavigate({ from: "/" });

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
        <Board boardId={boardId} />
      ) : (
        <button onClick={createBoard}>Create a new board</button>
      )}
    </>
  );
}

export default App;
