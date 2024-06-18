import { useContext } from "react";
import { LiftedCardContext } from "./LiftedCardContext";
import { LyricsContext } from "./LyricsContext";

const Card = () => {
  const cardLiftHandler =
    useContext(LiftedCardContext) ??
    (() => {
      console.log("default handler");
    });
  const lyricsValue = useContext(LyricsContext);

  return (
    <>
      <textarea
        draggable="true"
        onDragStart={(event) => {
          event.target && cardLiftHandler.setLiftedCard(event.target);
          console.log("setting lifted card to " + event.target);
        }}
        onDragOver={(event) => {
          event.preventDefault();
        }}
        className="grid-item"
        defaultValue={lyricsValue()}
      ></textarea>
    </>
  );
};

export default Card;
