import { useState } from "react";
import Column from "./Column.tsx";
import { LiftedCardContext } from "./LiftedCardContext.tsx";
import { LiftedCardState } from "./types.ts";
import { apiGetColumns, apiAddColumn } from "./_apiService.ts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Board = ({ boardId }: { boardId: string }) => {
  const [liftedCard, setLiftedCard] = useState(null);
  const queryClient = useQueryClient();

  const baseApiUrl = "nothing/";

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: [boardId] });
  };

  const columns = useQuery({
    queryKey: [boardId],
    queryFn: async () => apiGetColumns(baseApiUrl, boardId),
  });

  const cardObj: LiftedCardState = {
    liftedCard: liftedCard,
    setLiftedCard: setLiftedCard,
  };

  const addColumnMutation = useMutation({
    mutationFn: () => apiAddColumn("", boardId, "New column", 2),
    onSuccess: invalidate,
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
            <Column
              key={col.id}
              invalidateCache={invalidate}
              boardId={boardId}
              {...col}
            />
          ))}
        </LiftedCardContext.Provider>
      </div>
    </>
  );
};

export default Board;
