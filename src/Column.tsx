import Card from "./Card.tsx";

const Column = (props) => {
  const columnTitle = props.columnTitle;
  const setLiftedCardHandler = props.cardLiftHandler;
  const liftedCard = props.liftedCard;

  return (
    <>
      <div className="column">
        <h4 className="grid__column-title">{columnTitle}</h4>
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
          <Card
            liftedCard={props.liftedCard}
            cardLiftHandler={setLiftedCardHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Column;
