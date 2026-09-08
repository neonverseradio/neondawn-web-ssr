import "../../styles/podcast.css";


export default function ArtistInterviews() {
  return (
    <main className="podcast-page">

      {/* =========================================================
          HERO
         ========================================================= */}

      <section className="podcast-hero">

        <div className="podcast-eyebrow">
          🎙 NEONVERSE PODCASTS
        </div>

        <h1>
          ARTIST INTERVIEWS
        </h1>

        <p className="podcast-hero-line">
          Voices from the Future City.
        </p>

        <p className="podcast-hero-copy">
          Conversations with artists shaping the independent signal.
          Stories, ideas, music and creative worlds — archived by NeonVerse Radio.
        </p>

      </section>


      {/* =========================================================
          FEATURED EPISODE
         ========================================================= */}

      <section className="podcast-feature">

        <div className="podcast-signal">
          NEONVERSE SIGNAL // 001
        </div>

        <div className="podcast-feature-grid">

          <div className="podcast-art-panel">

            <div className="podcast-art-frame">
                
              <div className="podcast-art-placeholder">
                <span>LYNNEY</span>
              </div>
            </div>

          </div>


          <div className="podcast-episode-content">

            <div className="podcast-status">
              NOW ARCHIVED
            </div>

            <h2>
              LYNNEY
            </h2>

            <h3>
              Artist of the Month Interview
            </h3>

            <p className="podcast-transmission">
              TRANSMISSION #001
            </p>

            <p className="podcast-description">
              From the NeonVerse Radio archives, LYNNEY joins us for
              an Artist of the Month conversation from the Future City.
            </p>

            <p className="podcast-description">
              A closer look into the artist, the music and the creative
              world behind the signal.
            </p>


            {/* =====================================================
                SPOTIFY EMBED
               ===================================================== */}

            <div className="podcast-player-shell">

              <iframe
                src="https://open.spotify.com/embed/episode/1Zcz9lMpWJD3rPZBcvrMN7?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="LYNNEY Artist of the Month Interview"
              />

            </div>


            <a
              href="https://open.spotify.com/episode/1Zcz9lMpWJD3rPZBcvrMN7"
              target="_blank"
              rel="noopener noreferrer"
              className="podcast-spotify-link"
            >
              ▶ LISTEN ON SPOTIFY
            </a>

          </div>

        </div>

      </section>


      {/* =========================================================
          ARCHIVE FOOTER
         ========================================================= */}

      <section className="podcast-archive-footer">

        <span>
          NEONVERSE RADIO
        </span>

        <span className="podcast-divider">
          //
        </span>

        <span>
          THE SOUND OF FUTURE CITY
        </span>

      </section>

    </main>
  );
}