import { createContext } from "react";
import { LiftedCardState } from "./types";

const def: LiftedCardState = { liftedCard: null, setLiftedCard: () => {} };

export const LiftedCardContext = createContext(def);
