import { ColumnTransfer, CardTransfer } from "./types.ts";
import apiConfig from "../apiconfig.json";

const sampleCards = [
  { id: "abcd", contents: "card abcd with contents hello" },
  { id: "bcde", contents: "bcde says hi" },
  { id: "cdef", contents: "this is a card with id cdef" },
  { id: "defg", contents: "fjkdfjd" },
];

const createBoard = async () => {
  return fetch(`${apiConfig.baseApiUrl}`, { method: "POST" }).then((data) => {
    return data.headers.get("location");
  });
};

const apiGetColumns = async (
  baseApiUrl: string,
  boardId: string
): Promise<ColumnTransfer[]> => {
  return fetch(`${apiConfig.baseApiUrl}/${boardId}/columns`)
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      const array: ColumnTransfer[] = [];
      json.map((col: string, index: number) => {
        array.push({ location: index, title: col });
      });
      return array;
    });
};

const apiAddColumn = async (
  baseApiUrl: string,
  boardId: string,
  columnTitle: string,
  columnLocation: number
) => {
  fetch(`${apiConfig.baseApiUrl}/${boardId}/column/${columnLocation}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: columnTitle,
  });
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

export { createBoard, apiGetColumns, apiAddColumn, apiGetCardContents };
