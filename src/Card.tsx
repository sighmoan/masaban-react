import { useContext, useEffect, useState } from "react";
import { LiftedCardContext } from "./LiftedCardContext";
import { apiGetCardContents } from "./_apiService";

const Card = ({ baseApiUrl, cardId, defaultContents }) => {
  const cardLiftHandler =
    useContext(LiftedCardContext) ??
    (() => {
      console.log("default handler");
    });
  const [cardContents, setCardContents] = useState(defaultContents);

  /*  useEffect(() => {
    apiGetCardContents(baseApiUrl, cardId)
      .then((rcvdContents) => {
        if (rcvdContents) setCardContents(rcvdContents.contents);
      })
      .catch(() => {
        console.log("gotcha");
      });
  }, [baseApiUrl, cardId]);*/

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
        defaultValue={cardContents}
      ></textarea>
    </>
  );
};

export default Card;
