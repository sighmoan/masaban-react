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

  const [gridRow, setGridRow] = useState(0);
  const [gridColumn, setGridColumn] = useState(1);

  const moveRight = () => {
    /*console.log("WHAT");
    const cv: CardVector = cardVector;
    console.log(cv);
    cv.gridColumnStart++;
    console.log(cv);
    setCardVector(cv);*/
    console.log("yo");
    setGridColumn(gridColumn + 1);
  };

  return (
    <>
      <textarea
        onClick={moveRight}
        //style={{ ...cardVector }}
        style={{ gridRowStart: gridRow, gridColumnStart: gridColumn }}
        className="grid-item"
        defaultValue="yo what up"
      ></textarea>
    </>
  );
};

export default Card;
