
import { Link } from "react-router";
import "../seattle.css";
import "../app.css";

{/* =========================== START OF THE JSX BODY ================================== */}
export default function Meeka() {     
const image =
    "/artists/ytc/ytc.png";


  return (

    <main className="seattle-page">

      <section className="seattle-panel">


        <h2 className="seattle-title2">
          YTC - Ilovemakonnen
        </h2>


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
    src="/artists/ytc/ytc.png"
    alt="YTC — Artist of the Month"
    className="aotm-img"
  /> 
  <br /> <br />
  <img
    src="/artists/ytc/album1.png"
    alt="YTC — Artist of the Month"
   
  /> 
{/* END OF LYNNEY IMAGE */}

        <section className="seattle-content">


          <h2 className="enter-button">
   YTC -Yellow Trash Can - Ilovemakonnen
</h2><br />
 <a
          href="https://open.spotify.com/track/2FSgg9pVQ4PhME8RPigIFY?autoplay_ok=1"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          ♫ Stuntin On Em
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
    src="/artists/mak/ytc3.png"
    alt="Ilovemakonnen — Artist of the Month"
     />   <br /> 
    <img
    src="/artists/mak/ytc2.png"
    alt="Ilovemakonnen — Artist of the Month"
     />  
          
          
           <h2 className="enter-button">
   COMING SOON - Yellow Trash Can - YTC/Ilovemakonnen
</h2>


          <p>
            

This month, we feature YTC Yellow Trash Can feat Ilovemakonnen - Yellow Trash Can <br />
Yellow Trash Can return to the NeonVerse skyline as a full creative unit — 
producers, architects, and world‑builders — with ILoveMakonnen locked in as their permanent signal. 
Their August broadcast hits with two transmissions, 
CONTROL and Stuntin On Em 193 (YTC Mak Radio Edit), 
both shaped by YTC’s dystopian production and Makonnen’s unmistakable vocal presence.
 <br /> 
          </p>
<h2>
 Out now: Ilovemakonnen's - YTC songs are officially live on all streaming services! 
</h2>
<img
    src="/artists/ytc/mak4.png"
    alt="YTC — Artist of the Month"
     /> 
          <p>
            YTC craft the world: chrome‑bright synths, cyberpunk bass, 
            and that underground alt‑internet energy.
            Makonnen lives inside it: surreal delivery, chaotic charisma, 
            and the kind of voice that turns every YTC beat into a neon‑lit scene.
<br /><br />
            This month’s AOTM isn’t a duo, and it isn’t a feature — it’s a collective frequency.
            Yellow Trash Can lead the broadcast. Makonnen rides the signal with them.
          </p>


          <h2>
            NeonVerse Review
          </h2>

{/* ============================ NEON CSS ============================================== */}
         <h4 className="neon-review-mini">
  “Yellow Trash Can ignite the NeonVerse skyline like underground architects, 
  broadcasting chrome‑bright synths and dystopian 
  bass that feel engineered for midnight in a future city.
  
  <br />
  With Makonnen woven into their orbit as a permanent signal, 
  every YTC transmission hits like a neon pulse — 
  chaotic, cinematic, and unmistakably theirs."
</h4>




        </section>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<div class="v-space"></div>


        <a
       
  href="https://soundcloud.com/yellowtrashcann"
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