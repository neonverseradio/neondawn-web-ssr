import "../seattle.css";
import "../app.css";

{/* =========================== START OF SEATTLE ================================== */}
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

{/* START OF LYNNEY IMAGE */}

        <img
    src="/artists/lynney/lynney1.jpg"
    alt="Lynney — Artist of the Month"
    className="aotm-img"
  /> 
  <br /> <br />
  <img
    src="/artists/lynney/Lost.jpg"
    alt="Lynney — Artist of the Month"
   
  /> 
{/* END OF LYNNEY IMAGE */}

        <section className="seattle-content">


          <h2 className="enter-button">
   Artist of the Month - Lynney
</h2>
<br />

<a
          href="https://open.spotify.com/album/5cMqmbudEzhgFwgFdZlRfu"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          Lost
        </a>
<div class="v-space"></div>

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

{/* ============================ START OF LYNNEY REVIEW ============================================== */}
           <img
    src="/artists/lynney/lynney3.jpg"
    alt="Lynney — Artist of the Month"
     />   <br /> 
    <img
    src="/artists/lynney/lynney5.jpg"
    alt="Lynney — Artist of the Month"
     />  
                  
          <h2 className="enter-button">
            Lynney Transmission
          </h2>


          <p>
            

Lynney is a Glasgow‑born singer‑songwriter 
blending synthwave nostalgia with raw emotional storytelling, 
crafting music that feels intimate, cinematic, and neon‑lit.

Her latest single “Lost” — written by Lynney Williamson and 
shaped through Evolution’s vocal production - dives into 
the darker side of synthwave with haunting melodies 
and pulsing retro tension. An advocate for neurodivergent creatives, 
she creates music that feels personal yet universal, 
a glowing soundtrack for anyone navigating the dark with hope.
 <br /> 
          </p>
<h2>
 Out now: Lynney's songs are officially live on all streaming services! 
</h2>
<img
    src="/artists/lynney/lynney4.jpg"
    alt="Lynney — Artist of the Month"
     /> 
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

{/* ============================ NEON CSS ============================================== */}
         <h4 className="neon-review-mini">
  "Lost" drifts into the NeonVerse like a midnight signal — subtle, tense, and emotionally charged.
  <br />
  A cinematic transmission built for late-night wanderers.
</h4>




        </section>


        <a
  href="https://lynneywilliamson.bandcamp.com/track/i-see-you"
  target="_blank"
  rel="noreferrer"
  className="enter-button"
>
  Enter Signal
</a>



      </section>


    </main>

  );
}