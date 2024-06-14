import Column from "./Column.tsx";
import Card from "./Card.tsx";

const Board = () => {
  return (
    <>
      <div className="grid-container" id="grid-container">
        <Column />
        <Column />
        <Column />
        <Column />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Board;
