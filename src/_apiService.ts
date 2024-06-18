import { ColumnTransfer } from "./types.ts";

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
): Promise<string> => {
  return "";
};

export { apiGetColumns, apiGetCardContents };
