import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import SocialMediaPage from "../../components/pages/projects/socialMedia";

export const socialMediaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/social-media",
  component: SocialMediaPage,
});
