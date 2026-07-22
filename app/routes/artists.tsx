import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";

import { ARTISTS } from "../types/artists-meta";

export default function Artists() {
const navigate = useNavigate();
const [query, setQuery] = useState("");

const filtered = useMemo(() => {
if (!query) return ARTISTS;

return ARTISTS.filter((artist) =>
  artist.name.toLowerCase().includes(query.toLowerCase())
);

}, [query]);

const previewArtist = useMemo(() => {
if (query.trim().length < 4) return null;

return ARTISTS.find((artist) =>
  artist.name.toLowerCase().includes(query.trim().toLowerCase())
);

}, [query]);

return (
<main className="min-h-screen bg-black text-cyan-300 flex flex-col items-center px-6 py-16">

  <h1 className="text-5xl font-black uppercase tracking-[0.4em] mb-12">
    Artists
  </h1>

  <input
    type="text"
    placeholder="Search artist..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter" && previewArtist) {

        // =====================================
        // ARTIST LINK LOCATION #1
        // Search result + Enter key
        //
        // This generates:
        // /lynney
        //
        // because the route is:
        // route("lynney", "routes/lynney.tsx")
        // =====================================

        navigate(`/${previewArtist.slug}`);
      }
    }}
    className="
      w-full
      max-w-md
      rounded-md
      border
      border-cyan-400/40
      bg-cyan-400/10
      px-4
      py-3
      text-center
      text-xl
      outline-none
      placeholder:text-cyan-400/40
      focus:border-cyan-400
    "
  />

  <div className="h-72 flex items-center justify-center mt-12">

    {previewArtist && (
      <Link

        // =====================================
        // ARTIST LINK LOCATION #2
        // Search preview image/card
        //
        // This generates:
        // /lynney
        // =====================================

        to={`/${previewArtist.slug}`}

        className="flex flex-col items-center gap-4 animate-fade-in"
      >
        <img
          src={previewArtist.img}
          alt={previewArtist.name}
          className="
            w-56
            h-56
            rounded-lg
            object-cover
            border
            border-cyan-400
            shadow-lg
            hover:scale-105
            transition
          "
        />

        <h2 className="text-3xl font-bold">
          {previewArtist.name}
        </h2>
      </Link>
    )}

  </div>

  <ul className="mt-12 space-y-3 text-xl">

    {filtered
      .filter((artist) => artist.slug !== previewArtist?.slug)
      .map((artist) => (
        <li key={artist.slug}>

          <Link

            // =====================================
            // ARTIST LINK LOCATION #3
            // Artist list links
            //
            // This generates:
            // /lynney
            // =====================================

            to={`/${artist.slug}`}

            className="text-purple-400 hover:text-cyan-300 transition"
          >
            {artist.name}
          </Link>

        </li>
      ))}

  </ul>

</main>

);
}