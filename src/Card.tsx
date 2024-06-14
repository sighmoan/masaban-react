const Card = (props) => {
  const cardLiftHandler = props.cardLiftHandler;

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
        className="grid-item"
        defaultValue="yo what up"
      ></textarea>
    </>
  );
};

export default Card;
