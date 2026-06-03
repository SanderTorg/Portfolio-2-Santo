import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/rootRoute";
import { homeRoute } from "./routes/home/homeRoute";
import { socialMediaRoute } from "./routes/projects/socialMediaRoute";
import { auctionRoute } from "./routes/projects/auctionRoute";
import { onlineShopRoute } from "./routes/projects/onlineShopRoute";

const routeTree = rootRoute.addChildren([
  homeRoute,
  onlineShopRoute,
  socialMediaRoute,
  auctionRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
