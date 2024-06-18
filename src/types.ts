import { Dispatch, SetStateAction } from "react";

export type ColumnProperties = {
  columnTitle: string;
  liftedCard: any;
};

export type LiftedCardState = {
  liftedCard: EventTarget | null;
  setLiftedCard: Dispatch<SetStateAction<null>> | null;
};
