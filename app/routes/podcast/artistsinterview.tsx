import { useMemo, useState } from "react";
import "../../styles/podcast.css";


const PODCAST_EPISODES = [
  {
    id: "001",
    artist: "LYNNEY",
    title: "Artist of the Month Interview",
    image: "/artists/lynney/lynney1.jpg",
    spotifyEmbed:
      "https://open.spotify.com/embed/episode/1Zcz9lMpWJD3rPZBcvrMN7?utm_source=generator",
    spotifyLink:
      "https://open.spotify.com/episode/1Zcz9lMpWJD3rPZBcvrMN7",
    description1:
      "From the NeonVerse Radio archives, LYNNEY joins us for an Artist of the Month conversation from the Future City.",
    description2:
      "A closer look into the artist, the music and the creative world behind the signal.",
  },
];


export default function ArtistInterviews() {
  const [search, setSearch] = useState("");

  const filteredEpisodes = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return PODCAST_EPISODES;
    }

    return PODCAST_EPISODES.filter((episode) => {
      return (
        episode.id.toLowerCase().includes(query) ||
        episode.artist.toLowerCase().includes(query) ||
        episode.title.toLowerCase().includes(query)
      );
    });
  }, [search]);


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
          ARCHIVE SEARCH
         ========================================================= */}

      <section className="podcast-search-section">

        <div className="podcast-search-label">
          SEARCH THE ARCHIVE
        </div>

        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search artist or signal... 001 / LYNNEY"
          className="podcast-search-input"
          aria-label="Search NeonVerse podcast archive"
        />

      </section>


      {/* =========================================================
          EPISODE ARCHIVE
         ========================================================= */}

      {filteredEpisodes.length > 0 ? (

        filteredEpisodes.map((episode) => (

          <section
            className="podcast-feature"
            key={episode.id}
          >

            <div className="podcast-signal">
              NEONVERSE SIGNAL // {episode.id}
            </div>

            <div className="podcast-feature-grid">

              <div className="podcast-art-panel">

                <div className="podcast-art-frame">

                  <img
                    src={episode.image}
                    alt={`${episode.artist} — NeonVerse Artist Interview`}
                    className="podcast-art-image"
                  />

                </div>

              </div>


              <div className="podcast-episode-content">

                <div className="podcast-status">
                  NOW ARCHIVED
                </div>

                <h2>
                  {episode.artist}
                </h2>

                <h3>
                  {episode.title}
                </h3>

                <p className="podcast-transmission">
                  TRANSMISSION #{episode.id}
                </p>

                <p className="podcast-description">
                  {episode.description1}
                </p>

                <p className="podcast-description">
                  {episode.description2}
                </p>


                {/* =================================================
                    SPOTIFY EMBED
                   ================================================= */}

                <div className="podcast-player-shell">

                  <iframe
                    src={episode.spotifyEmbed}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`${episode.artist} ${episode.title}`}
                  />

                </div>


                <a
                  href={episode.spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="podcast-spotify-link"
                >
                  ▶ LISTEN ON SPOTIFY
                </a>

              </div>

            </div>

          </section>

        ))

      ) : (

        <div className="podcast-no-results">
          NO SIGNAL FOUND IN THE ARCHIVE
        </div>

      )}


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