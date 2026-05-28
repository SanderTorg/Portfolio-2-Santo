import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import HomePage from "../../components/pages/home";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
