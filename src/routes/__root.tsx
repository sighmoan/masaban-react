import { createRootRoute, Outlet } from "@tanstack/react-router";
import App from "../App.tsx";

export const Route = createRootRoute({
  component: () => (
    <>
      <p>hlelo</p>
      <Outlet />
    </>
  ),
});
