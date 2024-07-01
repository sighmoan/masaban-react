import { createLazyFileRoute } from "@tanstack/react-router";
import Board from "../../Board";

export const Route = createLazyFileRoute("/board/$boardId")({
  loader: async ({ params }) => {
    return params;
  },
  component: Board,
});
