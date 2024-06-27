import { useState, useEffect } from "react";
import Column from "./Column.tsx";
import { LiftedCardContext } from "./LiftedCardContext.tsx";
import { LiftedCardState, ColumnTransfer } from "./types.ts";
import { apiGetColumns, apiAddColumn } from "./_apiService.ts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Board = ({ boardId }: { boardId: string }) => {
  const [liftedCard, setLiftedCard] = useState(null);
  const queryClient = useQueryClient();

  const baseApiUrl = "nothing/";

  const columns = useQuery({
    queryKey: [boardId],
    queryFn: () => apiGetColumns(baseApiUrl, boardId),
  });

  const cardObj: LiftedCardState = {
    liftedCard: liftedCard,
    setLiftedCard: setLiftedCard,
  };

  const addColumnMutation = useMutation({
    mutationFn: () => {
      return apiAddColumn("", boardId, "New column", 2);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [boardId] });
    },
  });

  const addColumn = () => {
    addColumnMutation.mutate();
  };

  return (
    <>
      <button onClick={addColumn}>Add Column</button>
      <div className="grid-container" id="grid-container">
        <LiftedCardContext.Provider value={cardObj}>
          {columns.data?.map((col) => (
            <Column key={col.id} columnTitle={col.title} />
          ))}
        </LiftedCardContext.Provider>
      </div>
    </>
  );
};

export default Board;
