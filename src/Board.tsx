import { useState, useEffect } from "react";
import Column from "./Column.tsx";
import { LiftedCardContext } from "./LiftedCardContext.tsx";
import { LiftedCardState, ColumnTransfer } from "./types.ts";
import { apiGetColumns } from "./_apiService.ts";

const Board = (boardId: string) => {
  const [liftedCard, setLiftedCard] = useState(null);
  const [columns, setColumns] = useState<ColumnTransfer[]>();

  const baseApiUrl = "nothing/";

  useEffect(() => {
    apiGetColumns(baseApiUrl, boardId).then(setColumns);
  }, [boardId]);

  const cardObj: LiftedCardState = {
    liftedCard: liftedCard,
    setLiftedCard: setLiftedCard,
  };

  return (
    <>
      <div className="grid-container" id="grid-container">
        <LiftedCardContext.Provider value={cardObj}>
          {columns?.map((col, index) => (
            <Column key={col.location} columnTitle={col.title} />
          ))}
        </LiftedCardContext.Provider>
      </div>
    </>
  );
};

export default Board;
