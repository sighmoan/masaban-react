import { useState } from "react";
import Column from "./Column.tsx";
import { LiftedCardContext } from "./LiftedCardContext.tsx";
import { LyricsContext } from "./LyricsContext.ts";
import { LiftedCardState } from "./types.ts";

const Board = () => {
  const [liftedCard, setLiftedCard] = useState(null);
  const cardObj: LiftedCardState = {
    liftedCard: liftedCard,
    setLiftedCard: setLiftedCard,
  };

  let currentLyric = 0;

  const daftPunk = () => {
    console.log("untz untz untz");
    const lyrics: string[] = [
      "Work it harder, make it better",
      "Work is never over",
      "Do it faster, makes us stronger",
      "More than ever, hour after hour",
      "Work is never over",
      "More than ever, hour after hour",
      "Do it faster, makes us stronger",
      "Work it harder, make it better",
    ];
    currentLyric++;
    if (currentLyric == lyrics.length) currentLyric = 0;

    return lyrics[currentLyric];
  };

  return (
    <>
      <div className="grid-container" id="grid-container">
        <LiftedCardContext.Provider value={cardObj}>
          <LyricsContext.Provider value={daftPunk}>
            <Column liftedCard={liftedCard} columnTitle="Idea box" />
            <Column liftedCard={liftedCard} columnTitle="To do" />
            <Column liftedCard={liftedCard} columnTitle="Doing" />
            <Column liftedCard={liftedCard} columnTitle="Done" />
          </LyricsContext.Provider>
        </LiftedCardContext.Provider>
      </div>
    </>
  );
};

export default Board;
