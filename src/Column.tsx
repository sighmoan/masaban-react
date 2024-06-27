import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteColumn } from "./_apiService.ts";
import Card from "./Card.tsx";

const Column = (props) => {
  const columnTitle = props.columnTitle;
  const liftedCard = props.liftedCard;
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: () => apiDeleteColumn(props.boardId, props.columnId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [props.boardId] }),
  });

  return (
    <>
      <div className="column">
        <h4 className="grid__column-title">{columnTitle}</h4>
        <div
          style={{
            display: "flex",
            "justify-content": "space-between",
            "margin-bottom": "1.5em",
          }}
        >
          <small>Left</small>
          <small>Right</small>
          <small onClick={() => deleteMutation.mutate()}>Delete</small>
        </div>
        <div
          className="grid__column-flexbox"
          onDragOver={(event) => {
            event.preventDefault();
          }}
          onDrop={(event) => {
            console.log("drop it like it's hot");
            if (event.currentTarget.className == "grid__column-flexbox") {
              console.log("you are dragging over me " + event.currentTarget);

              liftedCard.parentNode.removeChild(liftedCard);
              event.currentTarget.appendChild(liftedCard);
            }
          }}
        >
          <Card baseApiUrl="nah" cardId="abcd" />
        </div>
      </div>
    </>
  );
};

export default Column;
