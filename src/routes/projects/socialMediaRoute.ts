import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import BlogPage from "../../components/pages/projects/blog";

export const socialMediaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/social-media",
  component: BlogPage,
});
