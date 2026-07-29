
import { Link } from "react-router";
import "../seattle.css";
import "../app.css";

{/* =========================== START OF THE JSX BODY ================================== */}
export default function Meeka() {     
const image =
    "/artists/mak/ilovemakonnen.png";


  return (

    <main className="seattle-page">

      <section className="seattle-panel">


        <h2 className="seattle-title2">
          Ilovemakonnen - YTC 
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
    src="/artists/mak/ilovemakonnen.png"
    alt="Ilovemakonnen — Artist of the Month"
    className="aotm-img"
  /> 
  <br /> <br />
  <img
    src="/artists/mak/mak4.png"
    alt="Ilovemakonnen — Artist of the Month"
   
  /> 
{/* END OF LYNNEY IMAGE */}

        <section className="seattle-content">


          <h2 className="enter-button">
   Ilovemakonnen
</h2><br />
 <a
          href="https://open.spotify.com/track/5gokFSKfWU1p4SJaG2IWNZ?autoplay_ok=1"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          ♫ Control
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
    src="/artists/mak/album1.png"
    alt="Ilovemakonnen — Artist of the Month"
     />   <br /> 
    <img
    src="/artists/mak/ytc2.png"
    alt="Ilovemakonnen — Artist of the Month"
     />  
          
          
           <h2 className="enter-button">
   COMING SOON - Ilovemakonnen
</h2>


          <p>
            

This month, we feature Ilovemakonnen feat YTC - Yellow Trash Can <br />
ILoveMakonnen returns to the NeonVerse skyline with the weight of a Grammy nomination behind him — 
a rare badge in the alt‑internet world — 
and a history of collaborations that stretch deep into Toronto’s underground scene. 
 <br /> 
          </p>
<h2>
 Out now: Ilovemakonnen's - YTC songs are officially live on all streaming services! 
</h2>
<img
    src="/artists/mak/ytc3.png"
    alt="Ilovemakonnen — Artist of the Month"
     /> 
          <p>
            His voice has moved through the city’s creative corridors, 
            linking up with Toronto‑based singers and rappers who share his left‑field, genre‑bending energy. 
            That cross‑border creative DNA shows up in every broadcast he sends our way, 
            amplified by one of the most iconic moments of the 2010s: 
<br /><br />
            his breakout collaboration with Drake on “Tuesday,” 
            a cultural flashpoint that became a global anthem 
            and permanently stamped Makonnen’s name into Toronto’s musical history.
          </p>


          <h2>
            NeonVerse Review
          </h2>

{/* ============================ NEON CSS ============================================== */}
         <h4 className="neon-review-mini">
  “ILoveMakonnen surges through the NeonVerse skyline like a neon flare, 
  a Grammy‑nominated voice whose legacy — from “Tuesday” 
  to his Toronto collaborations — keeps reshaping the alt‑internet signal.   
  
  <br />
  Powered by Yellow Trash Can’s dystopian production, 
  his August broadcast hits with cinematic voltage, 
  turning every transmission into a late‑night future‑city anthem.""
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