import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import AuctionPage from "../../components/pages/projects/auction";

export const auctionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auction",
  component: AuctionPage,
});
