import { createContext } from "react";

type StateCard = {
  currentState: any;
  changeState: Function;
};

const def: StateCard = { currentState: null, changeState: () => {} };

export const LiftedCardContext = createContext(def);
