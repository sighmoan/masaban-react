import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteColumn, apiRenameColumn } from "./_apiService.ts";
import Card from "./Card.tsx";

const Column = (props) => {
  const columnTitle = props.columnTitle;
  const liftedCard = props.liftedCard;

  const renameMutation = useMutation({
    mutationFn: (newLabel: string) =>
      apiRenameColumn(props.boardId, props.id, {
        label: newLabel,
        index: props.index,
      }),
  });

  const deleteMutation = useMutation({
    mutationFn: () => {
      console.log("deleting");
      return apiDeleteColumn(props.boardId, props.id);
    },
    onError: () => {
      console.log("error");
    },
    onSuccess: () => {
      console.log("successfully mutated ", props.boardId.trim());
      props.invalidateCache();
    },
  });

  return (
    <>
      <div className="column">
        <input
          onBlur={(e) => {
            console.log(e);
            renameMutation.mutate(e.target.value);
          }}
          className="grid__column-title"
          type="text"
          defaultValue={props.title}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1.5em",
          }}
        >
          <small>&lt;</small>
          <small onClick={() => deleteMutation.mutate()}>delete</small>
          <small>&gt;</small>
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
