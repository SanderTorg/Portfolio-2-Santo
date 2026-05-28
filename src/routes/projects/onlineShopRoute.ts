import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import OnlineShopPage from "../../components/pages/projects/onlineShop";

export const onlineShopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/online-shop",
  component: OnlineShopPage,
});
