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

      // Novelles artist page
     route("novelley", "routes/novelley.tsx"),

      // Kurt artist page
     route("kurt", "routes/kurt.tsx"),

        // Arlin artist page
     route("arlin", "routes/arlin.tsx"),

      // XD:I artist page
     route("xdi", "routes/xdi.tsx"),

     // NIYA artist page
     route("niya", "routes/niya.tsx"),

      // SUBMIT artist page
     route("submit", "routes/submit.tsx"),

      // SUBMIT artist page
     route("register", "routes/register.tsx"),

     // SUBMIT artist page
     route("playlist", "routes/playlist.tsx"),

// SUBMIT artist page
     route("about", "routes/about.tsx"),

     // =====================================
// AI LAB
// =====================================

// AI Artists page
route("ai-artists", "routes/ai_artists/aipage.tsx"),
route("submit-ai", "routes/ai_artists/submit-ai.tsx"),

// =====================================
// DJ'S PAGE
// =====================================

route("djpage", "routes/djpage/dj.tsx"),
route("djpage/resident", "routes/djpage/resident.tsx"),
route("djpage/welcome", "routes/djpage/welcome.tsx"),
route("djpage/schedule", "routes/djpage/schedule.tsx"),


] satisfies RouteConfig;