import { useState } from "react";
import Column from "./Column.tsx";
import { LiftedCardContext } from "./LiftedCardContext.tsx";

type StateCard = {
  currentState: any;
  changeState: Function;
};

const Board = () => {
  const [liftedCard, setLiftedCard] = useState(null);
  const cardObj: StateCard = {
    currentState: liftedCard,
    changeState: setLiftedCard,
  };

  return (
    <>
      <div className="grid-container" id="grid-container">
        <LiftedCardContext.Provider value={cardObj}>
          <Column liftedCard={liftedCard} columnTitle="Idea box" />
          <Column liftedCard={liftedCard} columnTitle="To do" />
          <Column liftedCard={liftedCard} columnTitle="Doing" />
          <Column liftedCard={liftedCard} columnTitle="Done" />
        </LiftedCardContext.Provider>
      </div>
    </>
  );
};

export default Board;
