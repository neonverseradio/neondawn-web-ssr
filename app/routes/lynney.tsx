import "../seattle.css";

export default function Lynney() {

  const image =
    "/artists/lynney/lynney1.jpg";


  return (

    <main className="seattle-page">

      <section className="seattle-panel">


        <h1 className="seattle-title">
          Seattle Signal
        </h1>


        <p className="seattle-tagline">
          The Sound of Future City
          <br />
          Defining Neon Vibes. 24/7.
        </p>


        <p>
          NeonVerse Radio – West Coast Transmission
        </p>


        <img
          src={image}
          alt="Lynney"
          className="seattle-image"
        />


        <section className="seattle-content">


          <h2>
            Artist of the Month — LYNNEY
          </h2>


          <p>
            Rain falls. Signals drift.
            The city hums beneath neon reflections.
          </p>


          <p>
            Welcome to the Seattle Signal —
            a darker atmospheric channel of
            NeonVerse Radio, broadcasting from
            the shadow of the Space Needle and
            the neon-washed streets of the
            Pacific Northwest.
          </p>


          <p>
            Expect deep synthwave, ambient
            electronic textures, cinematic indie
            sounds, and late-night drive energy
            shaped by Seattle's skyline.
          </p>


          <h2>
            Lynney Transmission
          </h2>


          <p>
            Lynney is a Glasgow-born
            singer-songwriter blending synthwave
            nostalgia with emotional storytelling.
            Her music combines intimate vocals,
            cinematic atmosphere, and neon-lit
            retro energy.
          </p>


          <p>
            Her single "Lost" explores the darker
            side of synthwave with haunting
            melodies and pulsing retro tension —
            a midnight signal for anyone navigating
            the shadows with hope.
          </p>


          <h2>
            NeonVerse Review
          </h2>


          <p>
            "Lost" drifts into the NeonVerse like
            a midnight signal — subtle, tense,
            and emotionally charged.
            A cinematic transmission built for
            late-night wanderers.
          </p>


        </section>


        <a
          href="https://lynneywilliamson.bandcamp.com/track/i-see-you"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          Enter Signal
        </a>


      </section>


    </main>

  );
}