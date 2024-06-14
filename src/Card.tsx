import { useRef, useState } from "react";

type CardVector = {
  gridRowStart: number;
  gridColumnStart: number;
};

const Card = () => {
  const [cardVector, setCardVector]: [
    cardVector: CardVector,
    setCardVector: (cv: CardVector) => void
  ] = useState({ gridRowStart: 0, gridColumnStart: 1 });
  const [translateString, setTranslateString] = useState("");

  const followMousePointer = (event) => {
    const translateX = event.clientX;
    const translateY = event.clientY;

    setTranslateString(translateX + "px " + translateY + "px");
  };

  return (
    <>
      <textarea
        onMouseDown={() => {
          document.addEventListener("mousemove", followMousePointer);
        }}
        onMouseUp={() => {
          console.log("yo");
          document.removeEventListener("mousemove", followMousePointer);
        }}
        style={{
          gridColumnStart: cardVector.gridColumnStart,
          translate: translateString,
        }}
        className="grid-item"
        defaultValue="yo what up"
      ></textarea>
    </>
  );
};

export default Card;
