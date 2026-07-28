import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Homepage
  index("routes/index.tsx"),

  // Artists page
  route("artists", "routes/artists.tsx"),

  // Lynney artist page
  route("lynney", "routes/lynney.tsx"),

  // Meeka artist page
  route("meeka", "routes/meeka.tsx"),

    // Meeka artist page
     route("martyrs", "routes/martyrs.tsx"),

      // Makonnen artist page
     route("mak", "routes/mak.tsx"),

      // Karl artist page
     route("karl", "routes/karl.tsx"),

      // Keshon artist page
     route("keshon", "routes/keshon.tsx"),

      // YTC artist page
     route("ytc", "routes/ytc.tsx"),

      // SUBMIT artist page
     route("submit", "routes/submit.tsx"),


] satisfies RouteConfig;