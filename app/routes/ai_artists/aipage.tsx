import { useMemo, useState } from "react";
import "../../ai-lab.css";

const AI_ARTISTS = [
  {
    name: "Lola Carmesi",
    id: "lola-carmesi",
    img: "/aipage/carmesi/almost.png",
  },
    {
    name: "Around The W0rld",
    id: "aroundtheworld",
    img: "/aipage/aroundtheworld/reggae1.png",
  },
  ];

export default function AIArtistsPage() {
  const [query, setQuery] = useState("");

  const filteredArtists = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) {
      return AI_ARTISTS;
    }

    return AI_ARTISTS.filter((artist) =>
      artist.name.toLowerCase().includes(cleanQuery)
    );
  }, [query]);

  const previewArtist = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();

    if (cleanQuery.length < 2) {
      return null;
    }

    return AI_ARTISTS.find((artist) =>
      artist.name.toLowerCase().includes(cleanQuery)
    );
  }, [query]);

  const goToArtist = (id: string) => {
    const artistSection = document.getElementById(id);

    if (artistSection) {
      artistSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="ai-page">
      <section className="ai-panel">

        {/* =====================================
            HERO
        ===================================== */}

        <header className="ai-hero">
          <h1 className="ai-title">AI LAB</h1>

          <h2 className="ai-hero-line">
            The Future City is evolving.
          </h2>

          <p className="ai-tagline">
            New sounds. New creators. New intelligence.
          </p>
        </header>
{/* CINEMATIC INTRODUCTION */}
 
        <section className="ai-artist-card ai-cinematic">

     <h2
    className="ai-cinematic-signal"
    style={{
      color: "#66e0ff",
      textShadow:
        "0 0 8px rgba(102, 224, 255, 0.9), 0 0 18px rgba(102, 224, 255, 0.5)",
    }}
  >
    Signals evolve. Creativity connects.
  </h2>

  <p>
    Welcome to <strong>AI Lab</strong> — NeonVerse Radio&apos;s
    experimental branch for <strong>a new breed of artists</strong>,
    exploring AI-driven music and emerging forms of digital creativity.
  </p>

  <p className="ai-cinematic-end">
    This is the other side of NeonVerse — where sound is tested,
    decoded, and pushed into something new.
  </p>

</section>

        {/* =====================================
            DEFINITION
        ===================================== */}

        <section className="ai-content">
          <h2>What is AI Lab?</h2>

          <p>
            AI Lab is NeonVerse Radio&apos;s dedicated space for AI-driven
            artists, AI-assisted music, and emerging forms of digital
            creativity.
          </p>

          <p>
            Selected creators can submit original AI-driven music for
            consideration for airplay while featured projects are collected
            here inside the Lab.
          </p>

          <p>
            AI Lab operates as its own experimental branch of NeonVerse,
            separate from our main artist features and Artist of the Month,
            NeonVerse Radio&apos;s premium artist spotlight.
          </p>
        </section>

        {/* =====================================
            AI ARTIST SEARCH
        ===================================== */}

        <section className="ai-directory">
          <h2>AI Artists</h2>

          <input
            className="ai-search"
            type="search"
            placeholder="Search AI artist..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && previewArtist) {
                goToArtist(previewArtist.id);
              }
            }}
          />

          {/* Search preview */}
          <div className="ai-search-preview">
            {previewArtist && (
              <button
                type="button"
                className="ai-preview-button"
                onClick={() => goToArtist(previewArtist.id)}
              >
                {previewArtist.img && (
                  <img
                    src={previewArtist.img}
                    alt={previewArtist.name}
                    className="ai-preview-image"
                  />
                )}

                <h3>{previewArtist.name}</h3>
              </button>
            )}
          </div>

          {/* Search results */}
          {query.trim() && (
            <ul className="ai-search-results">
              {filteredArtists
                .filter((artist) => artist.id !== previewArtist?.id)
                .map((artist) => (
                  <li key={artist.id}>
                    <button
                      type="button"
                      onClick={() => goToArtist(artist.id)}
                    >
                      {artist.name}
                    </button>
                  </li>
                ))}
            </ul>
          )}

          {/* No results */}
          {query.trim() && filteredArtists.length === 0 && (
            <p className="ai-no-results">
              No AI artist found.
            </p>
          )}
        </section>


        {/* =====================================
            LOLA CARMESI
        ===================================== */}

        <section
          id="lola-carmesi"
          className="ai-artist-card"
        >
          <h2>Lola Carmesi</h2>

          <img
            src="/aipage/carmesi/almost.png"
            alt="Lola Carmesi"
            className="ai-artist-image"
          />

          <h3 className="ai-track">
            Almost
          </h3>

          <p>
            <strong>Genre —</strong> Flamenco sin reglas
          </p>

          <p className="ai-artist-motto">
            DUENDE · PASSION · FEELING · TRUTH
          </p>

          <p>
            Flamenco without rules — driven by duende, passion, feeling, and truth.
          </p>

          <a
  href="https://open.spotify.com/artist/1KWPQ7ZPZ8HuSDxywZVVe1"
  target="_blank"
  rel="noopener noreferrer"
  className="ai-badge"
>
  DECODE SIGNAL ◄
</a>
        </section>

{/* TEST   */}
<section
          id="aroundtheworld"
          className="ai-artist-card"
        >
          <h2>Around The W0rld</h2>

          <img
            src="/aipage/aroundtheworld/reggae1.png"
            alt="Around The W0rld"
            className="ai-artist-image"
          />

          <h3 className="ai-track">
            Reggae on Air
          </h3>

          <p>
            <strong>Genre —</strong> Reggae
          </p>

          <p className="ai-artist-motto">
              WARM BASS · SKANK GUITAR · DUB ECHOES · GOOD VIBES
          </p>

          <p>
            A smooth AI‑crafted reggae groove with warm bass, crisp skank guitar, 
           and airy dub echoes. Light, uplifting, and perfect for radio flow.
          </p>

          <a
  href="https://open.spotify.com/album/449WFbSK3fWRuHjwkzfEHy?utm_campaign=website&utm_medium=Email+&utm_source=SendGrid"
  target="_blank"
  rel="noopener noreferrer"
  className="ai-badge"
>
  DECODE SIGNAL ◄
</a>
        </section>

        {/* END TEST   */}
      </section>
    </main>
  );
}