import { useRef, useState, MutableRefObject } from "react";

type CardVector = {
  gridRowStart: number;
  gridColumnStart: number;
};

type Vector2d = {
  x: number;
  y: number;
};

const Card = (props) => {
  const cardLiftHandler = props.cardLiftHandler;
  const liftedCard = props.liftedCard;
  const [cardVector, setCardVector]: [
    cardVector: CardVector,
    setCardVector: (cv: CardVector) => void
  ] = useState({ gridRowStart: 0, gridColumnStart: 1 });
  const [translateString, setTranslateString] = useState("");
  const [abortController, setAbortController] = useState(new AbortController());
  const translateOrigin: MutableRefObject<Vector2d> = useRef<Vector2d>({
    x: 0,
    y: 0,
  });
  const translation: MutableRefObject<Vector2d> = useRef<Vector2d>({
    x: 0,
    y: 0,
  });

  const ref = useRef();

  const followMousePointer = (event: MouseEvent) => {
    console.log("a mousemove event happened");
    translation.current.x = event.pageX - translateOrigin.current.x;
    translation.current.y = event.pageY - translateOrigin.current.y;

    setTranslateString(
      translation.current.x + "px " + translation.current.y + "px"
    );
  };

  return (
    <>
      <textarea
        draggable="true"
        onDragStart={(event) => {
          cardLiftHandler(event.target);
          console.log("setting lifted card to " + event.target);
        }}
        onDragOver={(event) => {
          event.preventDefault();
        }}
        ref={ref}
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
