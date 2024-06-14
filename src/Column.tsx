import Card from "./Card.tsx";

const Column = ({ columnTitle }: { columnTitle: string }) => {
  return (
    <>
      <div className="column">
        <h4 className="grid__column-title">{columnTitle}</h4>
        <div className="grid__column-flexbox">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Column;
