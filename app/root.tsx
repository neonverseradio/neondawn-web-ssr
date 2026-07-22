import "./app.css";
import { Meta, Links, Scripts, Outlet, Link } from "react-router";
import { useState, useEffect } from "react";

// -----------------------------------------------------------------------------
// GLOBAL NEON HEADER
// -----------------------------------------------------------------------------
function NeonHeader({ nowPlaying }) {
  return (
    <header className="neon-header">
      <h1 className="title">NeonVerse Radio</h1>
      <p className="subtitle">Toronto Indie Station</p>
      <p className="tagline">The Sound of Future City</p>

      <div className="equalizer">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <p className="broadcast">Neon broadcast initializing</p>
      <h3>— the grid is powering up for the launch — </h3>

      {/* ---------------------------------------------------------
         GLOBAL AUDIO PLAYER (persistent across all pages)
      ---------------------------------------------------------- */}
      <section className="player global-player">
        <audio controls className="player-audio" id="neonAudio">
          <source
            src="https://a9.asurahosting.com/listen/neonverse/radio.mp3"
            type="audio/mpeg"
          />
        </audio>

        <div className="player-meta">
          <p>{nowPlaying}</p>
        </div>
      </section>

      {/* NAVIGATION */}
      <nav className="neon-nav">
        <Link to="/">Home</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/monthly-vibes">Monthly Vibes</Link>
        <Link to="/register">Register</Link>
        <Link to="/manifesto">Manifesto</Link>
        <Link to="/testneon1">NeonTest1</Link>
      </nav>
    </header>
  );
}

// -----------------------------------------------------------------------------
// DOCUMENT WRAPPER
// -----------------------------------------------------------------------------
function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />

        <meta charSet="utf-8" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon-nvr.png" />
        <link rel="icon" type="image/x-icon" href="/favicon-nvr.ico" />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// -----------------------------------------------------------------------------
// GLOBAL LAYOUT
// -----------------------------------------------------------------------------
function Layout({ children, nowPlaying }) {
  return (
    <>
      <NeonHeader nowPlaying={nowPlaying} />
      <main className="neon-main">{children}</main>
      <footer className="neon-footer">
        © {new Date().getFullYear()} NeonVerse Radio — The Sound of Future City
      </footer>
    </>
  );
}

// -----------------------------------------------------------------------------
// ROOT COMPONENT
// -----------------------------------------------------------------------------
export default function Root() {
  const [nowPlaying, setNowPlaying] = useState("Loading track info…");

  useEffect(() => {
    if (typeof window === "undefined") return;

    async function getNowPlaying() {
      try {
        const response = await fetch(
          "https://a9.asurahosting.com/api/nowplaying/neonverse",
          { cache: "no-store" }
        );

        const { now_playing } = await response.json();
        setNowPlaying(`${now_playing.song.artist} — ${now_playing.song.title}`);
      } catch {
        setNowPlaying("Live broadcast in progress");
      }
    }

    getNowPlaying();
    const interval = setInterval(getNowPlaying, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Document>
      <Layout nowPlaying={nowPlaying}>
        <Outlet />
      </Layout>
    </Document>
  );
}

// -----------------------------------------------------------------------------
// GLOBAL META TAGS (site-wide SEO + social)
// -----------------------------------------------------------------------------
export const meta = () => {
  return [
    { title: "NeonVerse Radio — The Sound of Future City" },

    // Basic SEO
    {
      name: "description",
      content:
        "NeonVerse Radio — The Sound of Future City. Toronto’s indie synthwave station streaming neon-lit atmosphere, night-drive energy, and futuristic electronic music 24/7. Stay in the neon.",
    },
    {
      name: "keywords",
      content:
        "NeonVerse Radio, synthwave radio, electronic radio, cyberpunk music, futuristic music, Toronto online radio, synthwave station",
    },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { rel: "canonical", href: "https://neonverseradio.com" },

    // SEO Enhancers
    { name: "author", content: "NeonVerse Radio" },
    { name: "language", content: "en" },
    { name: "theme-color", content: "#00ffff" },

    // OpenGraph
    {
      property: "og:title",
      content: "NeonVerse Radio — The Sound of Future City",
    },
    {
      property: "og:description",
      content:
        "Toronto’s indie synthwave station streaming neon-lit atmosphere and futuristic electronic music 24/7.",
    },
    {
      property: "og:image",
      content: "https://neonverseradio.com/neonverse-radio-og-small.jpg",
    },
    { property: "og:url", content: "https://neonverseradio.com" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "NeonVerse Radio" },
    { property: "og:locale", content: "en_CA" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "NeonVerse Radio — The Sound of Future City",
    },
    {
      name: "twitter:description",
      content:
        "Toronto’s indie synthwave station streaming neon-lit atmosphere and futuristic electronic music 24/7.",
    },
    {
      name: "twitter:image",
      content: "https://neonverseradio.com/neonverse-radio-og-small.jpg",
    },
  ];
};
