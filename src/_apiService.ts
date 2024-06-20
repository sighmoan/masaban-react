import { ColumnTransfer, CardTransfer } from "./types.ts";
import apiConfig from "../apiconfig.json";

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
  return fetch(`${apiConfig.baseApiUrl}/${boardId}/columns`)
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((json) => {
      console.log("json!", json);
      const array: ColumnTransfer[] = [];
      json.map((col, index) => {
        array.push({ location: index, title: col });
      });
      return array;
    });
  console.log(baseApiUrl + boardId);
  const cols = window.localStorage.getItem(`columns-${boardId}`);
  if (cols.length == 0) {
    apiAddColumn(baseApiUrl, boardId, "To do", 0);
  }
  return [
    { location: 0, title: "Idea bucket" },
    { location: 1, title: "To do" },
    { location: 2, title: "Doing" },
    { location: 3, title: "Done" },
  ];
};

const apiAddColumn = async (
  baseApiUrl: string,
  boardId: string,
  columnTitle: string,
  columnLocation: number
) => {
  let cols = window.localStorage.getItem(`columns-${boardId}`);
  cols += "";
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
