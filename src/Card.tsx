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
  const [abortController, setAbortController] = useState(new AbortController());

  const followMousePointer = (event) => {
    console.log("a mousemove event happened");
    const translateX = event.clientX;
    const translateY = event.clientY;

    setTranslateString(translateX + "px " + translateY + "px");
  };

  return (
    <>
      <textarea
        onMouseDown={() => {
          console.log("a mousedown event happened");
          document.addEventListener("mousemove", followMousePointer, {
            signal: abortController.signal,
          });
        }}
        onMouseUp={() => {
          console.log("yo");
          abortController.abort();
          setAbortController(new AbortController());
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
