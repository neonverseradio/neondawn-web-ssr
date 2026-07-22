import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Homepage
  index("routes/index.tsx"),

  // Artists page
  route("artists", "routes/artists.tsx"),

  // Lynney artist page
  route("lynney", "routes/lynney.tsx"),
] satisfies RouteConfig;