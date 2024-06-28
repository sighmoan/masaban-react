import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  apiDeleteColumn,
  apiRenameColumn,
  apiGetCardsByColumn,
  apiAddCardOnColumn,
} from "./_apiService.ts";
import Card from "./Card.tsx";
import { CardTransfer } from "./types.ts";

const Column = (props) => {
  const queryClient = useQueryClient();
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

  const moveMutation = useMutation({
    mutationFn: (dir) => {
      console.log("moving ", dir);
      console.log(props.location + dir);
      return apiRenameColumn(props.boardId, props.id, {
        label: props.title,
        index: props.location + dir,
      });
    },
    onSuccess: () => {
      console.log("successfully mutated ", props.boardId.trim());
      props.invalidateCache();
    },
  });

  const addCardMutation = useMutation({
    mutationFn: () => {
      return apiAddCardOnColumn(props.boardId, props.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [props.id] });
    },
  });

  const cards = useQuery({
    queryKey: [props.id],
    queryFn: () => apiGetCardsByColumn(props.boardId, props.id),
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
          <small onClick={() => moveMutation.mutate(-1)}>&lt;</small>
          <small onClick={() => deleteMutation.mutate()}>delete</small>
          <small onClick={() => moveMutation.mutate(+1)}>&gt;</small>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "1.5em",
          }}
        >
          <small onClick={() => addCardMutation.mutate()}>add card</small>
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
          {cards.data?.map((card: CardTransfer) => (
            <Card cardId={card.id} defaultContents={card.contents} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Column;
