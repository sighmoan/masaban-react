import { ColumnTransfer, CardTransfer } from "./types.ts";
import apiConfig from "../apiconfig.json";

const sampleCards = [
  { id: "abcd", contents: "card abcd with contents hello" },
  { id: "bcde", contents: "bcde says hi" },
  { id: "cdef", contents: "this is a card with id cdef" },
  { id: "defg", contents: "fjkdfjd" },
];

const createBoard = async () => {
  return fetch(`${apiConfig.baseApiUrl}`, { method: "POST" }).then((data) =>
    data.headers.get("location")
  );
};

const apiGetColumns = async (boardId: string): Promise<ColumnTransfer[]> => {
  return fetch(`${apiConfig.baseApiUrl}/${boardId}/columns`)
    .then((data) => data.json())
    .then((json) => {
      const array: ColumnTransfer[] = [];
      json.map((col: { id: string; index: number; label: string }) => {
        array.push({ id: col.id, location: col.index, title: col.label });
      });
      return array;
    });
};

const apiAddColumn = async (
  boardId: string,
  columnTitle: string,
  columnLocation: number
) => {
  const newColumn = { label: columnTitle, index: columnLocation };
  return fetch(`${apiConfig.baseApiUrl}/${boardId}/columns`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newColumn),
  });
};

const apiDeleteColumn = async (boardId: string, columnId: string) => {
  return fetch(`${apiConfig.baseApiUrl}/${boardId}/columns/${columnId}`, {
    method: "DELETE",
    mode: "cors",
  });
};

const apiGetCardContents = async (cardId: string): Promise<CardTransfer> => {
  console.log("searching for ", cardId);
  const card: CardTransfer | undefined = sampleCards.find(
    (card) => card.id == cardId
  );
  if (!card) return Promise.reject();
  return Promise.resolve(card);
};

const apiRenameColumn = (
  boardId: string,
  columnId: string,
  newColumn: { label: string; index: number }
): Promise<Response> => {
  return fetch(`${apiConfig.baseApiUrl}/${boardId}/columns/${columnId}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newColumn),
  });
};

const apiGetCardsByColumn = (
  boardId: string,
  columnId: string
): Promise<CardTransfer[]> => {
  return fetch(`${apiConfig.baseApiUrl}/${boardId}/columns/${columnId}/cards`)
    .then((data) => data.json())
    .then((json) => {
      const array: CardTransfer[] = [];
      json.map((card: { id: string; text: string }) => {
        array.push({ id: card.id, contents: card.text });
      });
      return array;
    });
};

const apiAddCardOnColumn = (boardId: string, columnId: string) => {
  return fetch(`${apiConfig.baseApiUrl}/${boardId}/columns/${columnId}/cards`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const apiUpdateCard = (
  boardId: string,
  cardId: string,
  contents: CardTransfer
) => {
  return fetch(`${apiConfig.baseApiUrl}/${boardId}/card/${cardId}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contents),
  });
};

export {
  createBoard,
  apiGetColumns,
  apiAddColumn,
  apiGetCardContents,
  apiRenameColumn,
  apiDeleteColumn,
  apiGetCardsByColumn,
  apiAddCardOnColumn,
  apiUpdateCard,
};
