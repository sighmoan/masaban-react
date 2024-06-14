import { useState } from "react";

type CardVector = {
  gridRowStart: number;
  gridColumnStart: number;
};

const Card = () => {
  const [cardVector, setCardVector]: [
    cardVector: CardVector,
    setCardVector: (cv: CardVector) => void
  ] = useState({ gridRowStart: 0, gridColumnStart: 1 });

  const moveRight = () => {
    console.log("WHAT");
    setCardVector({
      ...cardVector,
      gridColumnStart: cardVector.gridColumnStart + 1,
    });
  };

  return (
    <>
      <textarea
        onClick={moveRight}
        //style={{ ...cardVector }}
        style={{ gridColumnStart: cardVector.gridColumnStart }}
        className="grid-item"
        defaultValue="yo what up"
      ></textarea>
    </>
  );
};

export default Card;
