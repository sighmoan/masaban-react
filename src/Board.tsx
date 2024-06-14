import { useState } from "react";
import Column from "./Column.tsx";

const Board = () => {
  const [liftedCard, setLiftedCard] = useState(null);
  return (
    <>
      <div className="grid-container" id="grid-container">
        <Column
          liftedCard={liftedCard}
          cardLiftHandler={setLiftedCard}
          columnTitle="Idea box"
        />
        <Column
          liftedCard={liftedCard}
          cardLiftHandler={setLiftedCard}
          columnTitle="To do"
        />
        <Column
          liftedCard={liftedCard}
          cardLiftHandler={setLiftedCard}
          columnTitle="Doing"
        />
        <Column
          liftedCard={liftedCard}
          cardLiftHandler={setLiftedCard}
          columnTitle="Done"
        />
      </div>
    </>
  );
};

export default Board;
