import { ColumnTransfer, CardTransfer } from "./types.ts";

const sampleCards = [
  { id: "abcd", contents: "card abcd with contents hello" },
  { id: "bcde", contents: "bcde says hi" },
  { id: "cdef", contents: "this is a card with id cdef" },
  { id: "defg", contents: "fjkdfjd" },
];

const apiGetColumns = async (
  baseApiUrl: string,
  boardId: string
): Promise<ColumnTransfer[]> => {
  console.log(baseApiUrl + boardId);
  return [
    { location: 0, title: "Idea bucket" },
    { location: 1, title: "To do" },
    { location: 2, title: "Doing" },
    { location: 3, title: "Done" },
  ];
};

const apiGetCardContents = async (
  baseApiUrlWithBoard: string,
  cardId: string
): Promise<CardTransfer> => {
  console.log("searching for ", cardId);
  const card: CardTransfer | undefined = sampleCards.find(
    (card) => card.id == cardId
  );
  if (!card) return Promise.reject();
  return Promise.resolve(card);
};

export { apiGetColumns, apiGetCardContents };
