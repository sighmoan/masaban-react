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
  const [abortController] = useState(new AbortController());

  const followMousePointer = (event) => {
    const translateX = event.clientX;
    const translateY = event.clientY;

    setTranslateString(translateX + "px " + translateY + "px");
  };

  return (
    <>
      <textarea
        onMouseDown={() => {
          document.addEventListener("mousemove", followMousePointer, {
            signal: abortController.signal,
          });
        }}
        onMouseUp={() => {
          console.log("yo");
          abortController.abort();
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
