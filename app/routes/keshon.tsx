
import { Link } from "react-router";
import "../seattle.css";
import "../app.css";

{/* =========================== START OF THE JSX BODY ================================== */}
export default function Meeka() {     
const image =
    "/artists/keshon/keshon.png";


  return (

    <main className="seattle-page">

      <section className="seattle-panel">


        <h1 className="seattle-title">
          Keshon
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
    src="/artists/keshon/keshon2.png"
    alt="Keshon — Artist of the Month"
    className="aotm-img"
  /> 
  <br /> <br />
  <img
    src="/artists/keshon/keshon3.png"
    alt="keshon — Artist of the Month"
   
  /> <br />
{/* END OF LYNNEY IMAGE */}

        <section className="seattle-content">


          <h2 className="enter-button">
   Keshon
</h2><br />
 <a
          href="https://open.spotify.com/track/0YvOsL5i7LjzHcCniCndO4?autoplay_ok=1"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          ♫ Desires
        </a>
<div class="v-space"></div>

          <p className="seattle-tagline">
            Rain falls. Signals drift.
            The city hums beneath neon reflections.
          </p>

          <p className="seattle-tagline">
            Welcome to the Seattle Signal —
            a darker atmospheric channel of
            NeonVerse Radio, broadcasting from
            the shadow of the Space Needle and
            the neon-washed streets of the
            Pacific Northwest.
          </p>


          <p className="seattle-tagline">
            Expect deep synthwave, ambient
            electronic textures, cinematic indie
            sounds, and late-night drive energy
            shaped by Seattle's skyline.
          </p>

{/* ============================ START OF LYNNEY REVIEW ============================================== */}
           <img
    src="/artists/keshon/keshon.png"
    alt="Keshon — Artist of the Month"
     />   <br /> 
    <img
    src="/artists/keshon/keshon4.png"
    alt="Keshon — Artist of the Month"
         />  <br /> 
             
           <h2 className="enter-button">
   AOTM - Keshon
</h2>
<br /> 

          <p>
            

This month, we feature Keshon <br />
DESIRES arrives like a neon‑lit breath in the dark — 
a clean indie/alt‑pop transmission built for listeners 
who drift between pop instinct and hazy, cinematic atmosphere. 
Keshon Campbell steps forward with a single that feels 
both intimate and widescreen, a late‑night drive rendered in warm synths, 
soft edges, and a melodic pull that hits immediately.

 <br /> 
          </p>
<h2>
 Out now: Keshon's songs are officially live on all streaming services! 
</h2>
<img
    src="/artists/keshon/keshon2.png"
    alt="Keshon — Artist of the Month"
     /> 
          <p>
            Keshon Campbell, St. Louis‑born and now transmitting from Portland, Oregon, 
            moves through music the way a cinematographer moves through light. 
            His world is personal, hazy, melodic, visually charged — 
            songs that feel like scenes, frames, and emotional vignettes stitched together with atmosphere. 
<br /><br />
           On DESIRES, that world opens into a clean indie/alternative pop record 
           built for listeners who live between bedroom‑pop softness and left‑of‑center haze.

          </p>


          <h2>
            NeonVerse Review
          </h2>

{/* ============================ NEON CSS ============================================== */}
         <h4 className="neon-review-mini">
  “DESIRES drifts in like a neon‑soft pulse — 
  Keshon Campbell shaping a cinematic indie/alt‑pop moment built from warm synths, 
  hazy atmosphere, and that late‑night emotional glow.  
  
  <br />
  Produced by Yellow Trash Can, the track hits that perfect space 
  between psych pop and bedroom pop, immediate enough for 
  alternative programming and dreamy enough for skyline hours."
</h4>




        </section>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<div class="v-space"></div>


        <a
       
  href="https://linktr.ee/Keshoncampbell"
  target="_blank"
  rel="noreferrer"
  className="enter-button"
  style={{ fontSize: "1.8rem" }}
>
  Enter Signal
</a>



      </section>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<br />
<div class="v-space"></div>

    </main>

  );
}