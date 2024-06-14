import { useContext } from "react";
import { LiftedCardContext } from "./LiftedCardContext";

const Card = () => {
  const cardLiftHandler =
    useContext(LiftedCardContext) ??
    (() => {
      console.log("default handler");
    });

  return (
    <>
      <textarea
        draggable="true"
        onDragStart={(event) => {
          cardLiftHandler.changeState(event.target);
          console.log("setting lifted card to " + event.target);
        }}
        onDragOver={(event) => {
          event.preventDefault();
        }}
        className="grid-item"
        defaultValue="yo what up"
      ></textarea>
    </>
  );
};

export default Card;
