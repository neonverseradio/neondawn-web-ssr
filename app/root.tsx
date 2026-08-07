import "./audio.css";
import "./app.css";
import "./seattle.css";

import { Meta, Links, Scripts, Outlet, Link } from "react-router";
import { useState, useEffect } from "react";
import ArtistMarquee from "./components/artistmarquee";

// -----------------------------------------------------------------------------
// GLOBAL NEON HEADER
// -----------------------------------------------------------------------------
function NeonHeader({ nowPlaying }) {
  return (
    <header className="neon-header">

      <h1 className="title">NeonVerse Radio</h1>
      <p className="subtitle">Toronto Indie Station</p>
      <p className="tagline">The Sound of Future City</p>

      {/* Reactive Equalizer */}
      <div className="equalizer reactive">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      <p className="broadcast">Signal initializing…</p>
      <h3>— grid link established —</h3>
   
<div class="nav-wrapper"> 
      {/* GLOBAL AUDIO PLAYER */}
      <section className="player global-player neon-panel">
        <div className="player-frame">
          <audio controls className="player-audio" id="neonAudio">
            <source
              src="https://a9.asurahosting.com/listen/neonverse/radio.mp3"
              type="audio/mpeg"
            />
          </audio>
          {/* Metadata */}
          
          <div className="player-meta glow-meta">
            <p>{nowPlaying}</p>
          </div>
                    
                                                </div>

        {/* Transmission Line */}
        <div className="signal-line" />
      </section>
     </div>   <br />
<div class="nav-wrapper"> 
      {/* NAVIGATION */}
      <nav className="neon-nav">
        <Link to="/">Home</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/playlist">♪PlayList♪</Link>
        <Link to="/register">Register</Link>
        <Link to="/about">About</Link>
        <Link to="/submit">Submit</Link>
      </nav> 
      </div>
{/* ---------------------------------------------------------
         START OF MARQUEE HEADER 
      ---------------------------------------------------------- */}
             <ArtistMarquee />
      {/* ---------------------------------------------------------
         END OF MARQUEE HEADER
      ---------------------------------------------------------- */}
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
<footer className="neon-footer flex flex-col items-center justify-center gap-6 py-10">
  <Link
    to="#"
    onClick={(e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });

      // ⭐ Delay so the flash happens when header is visible
      setTimeout(() => {
        // HEADER FLASH
        const header = document.querySelector(".neon-header");
        if (header) {
          header.classList.add("header-flash");
          setTimeout(() => header.classList.remove("header-flash"), 700);
        }

        // EQUALIZER SPIKE
        const bars = document.querySelectorAll(".equalizer .bar");
        bars.forEach((bar) => {
          bar.classList.add("eq-spike");
          setTimeout(() => bar.classList.remove("eq-spike"), 500);
        });

        // MICRO‑MESSAGE REWARD
        const msg = document.createElement("div");
        msg.className = "top-reward-msg";
        msg.innerText = "Signal locked.";
        header.appendChild(msg);

        setTimeout(() => {
          msg.remove();
        }, 1500);
      }, 150);
    }}
    className="footer-home-button pulsing-home text-blue-300 font-extrabold text-4xl tracking-wide 
               border-4 border-blue-400 px-12 py-5 rounded-2xl 
               hover:bg-blue-400 hover:text-black transition cursor-pointer"
  >
    Home
  </Link>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<div class="v-space"></div><br />
  

  <br /><br />
  {/* ============================ START OF NEON ENGINE ============================================== */}
  <a
  href="https://www.facebook.com/NeonEngineOfficial"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    className="neon-engine-footer"
    src="/neon3.png"
    alt="Neon Engine"
  />
</a>
<p className="text-purple-300 text-lg font-semibold tracking-wide">
     Custom websites for artists, creators & independent brands.
  </p>
  <p className="text-purple-300 text-lg font-semibold tracking-wide">
    © {new Date().getFullYear()} NeonVerse Radio — The Sound of Future City
  </p>
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
