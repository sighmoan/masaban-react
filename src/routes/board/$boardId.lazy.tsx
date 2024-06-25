import { createLazyFileRoute, useParams } from "@tanstack/react-router";
import Board from "../../Board";

export const Route = createLazyFileRoute("/board/$boardId")({
  component: () => {
    const { boardId } = Route.useParams();
    return <Board boardId={boardId} />;
  },
});
