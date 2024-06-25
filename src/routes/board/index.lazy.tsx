import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/board/")({
  component: () => <div>Hello /board/!</div>,
});
