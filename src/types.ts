export type ColumnProperties = {
  columnTitle: string;
  liftedCard: any;
};

export type LiftedCardState = {
  liftedCard: EventTarget | null;
  setLiftedCard: (card: EventTarget) => void;
};
