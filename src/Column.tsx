import Card from "./Card.tsx";

const Column = (props) => {
  const columnTitle = props.columnTitle;
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
          <Card />
        </div>
      </div>
    </>
  );
};

export default Column;
