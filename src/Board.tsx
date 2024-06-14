import Column from "./Column.tsx";
import Card from "./Card.tsx";

const Board = () => {
  return (
    <>
      <div className="grid-container" id="grid-container">
        <Column columnTitle="Idea box" />
        <Column columnTitle="To do" />
        <Column columnTitle="Doing" />
        <Column columnTitle="Done" />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Board;
