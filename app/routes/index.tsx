import { useEffect, useState } from "react";

export default function Index() {
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
    <main className="page-body index-white">
  {/* FOOTER TRANSMISSION */}
      <footer className="footer">
        <p>A new breed of Future City transmission is coming on air.</p>
        <p>Signal boosted.</p>
        <p>Artists amplified.</p>
        <p>Neon fully powered.</p>
        <p className="footer-coming">Coming soon</p>
      </footer>
      {/* HEADER */}
      <header className="header-block">
        <p className="title neon-h4">Radio Low The Sky Feels Wide</p>
        <p className="subtitle">The Sound of Future City is activating…</p>
      </header>

      {/* ARTIST OF THE MONTH */}
     <section className="aotm">
  <h2 className="aotm-title">Artist of the Month — LYNNEY</h2>
    <p className="aotm-sub">♪► July ☼ ♪ Feature</p>
 <img
    src="/artists/lynney/Lost.jpg"
    alt="Lynney — Artist of the Month"
   
  /> <br></br><p>♪ Featured{" "}Artist ♪</p>
  <div className="aotm-frame">
  <img
    src="/artists/lynney/lynney1.jpg"
    alt="Lynney — Artist of the Month"
    className="aotm-img"
  />
</div>

</section>

      {/* LIVE PLAYER */}
      <section className="player">
        <h3 className="player-title">Live Stream</h3>

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

      {/* OFFLINE LISTENING */}
      <section className="offline">
        <h3 className="offline-title">Listen While Offline</h3>

        <p className="offline-desc">
          NeonVerse Radio is available across multiple radio platforms.  
          Tune in anywhere and experience The Sound of Future City.
        </p>

        <ul className="offline-list">
          <li><a href="https://onlineradiobox.com" className="link">OnlineRadioBox</a></li>
          <li><a href="https://streema.com" className="link">Streema</a></li>
          <li><a href="https://canadaradiostations.com" className="link">CanadaRadioStations</a></li>
          <li><a href="https://radoxo.com" className="link">Radoxo</a></li>
          <li><a href="https://radiotune.fm" className="link">RadioTune.fm</a></li>
          <li><a href="https://mytuner-radio.com" className="link">myTunerRadio</a></li>
        </ul>
      </section>

      {/* SOCIAL LINKS */}
      <section className="social">
        <p className="social-text">
          Check our official Instagram and Facebook for news and updates:
        </p>

        <p>
          <a
            href="https://www.instagram.com/neondawn.project/"
            className="link"
            target="_blank"
          >
            Instagram — Neon Dawn Project
          </a>
        </p>

        <p>
          <a
            href="https://www.facebook.com/NeonVerseRadio"
            className="link"
            target="_blank"
          >
            Facebook — NeonVerse Radio
          </a>
        </p>
      </section>

      {/* FOOTER TRANSMISSION */}
      <footer className="footer">
        <p>A new breed of Future City transmission is coming on air.</p>
        <p>Signal boosted.</p>
        <p>Artists amplified.</p>
        <p>Neon fully powered.</p>
        <p className="footer-coming">Coming soon</p>
      </footer>

    </main>
  );
}
