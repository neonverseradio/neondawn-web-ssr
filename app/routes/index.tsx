
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

 <section className="seattle-title">
<h2 className="enter-button">
   AOTM Spotlight Feature
</h2>
</section> <br /> <br />
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

{/* START OF YOUTUBE EMBED FRAME */}
<div style={{ maxWidth: "300px", width: "100%", margin: "0 auto" }}>
  <div style={{ position: "relative", paddingBottom: "177.78%", height: 0, overflow: "hidden" }}>
    <iframe
      src="https://www.youtube.com/embed/wwMwh45pA_c"
      title="Shine live in San Diego"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "8px"
      }}
    ></iframe>
  </div>
</div>
<br />
{/* END OF YOUTUBE EMBED FRAME */}

         <p className="seattle-tagline">
            Neon lights shimmer above Atlanta's endless midnight highways 
            as warm air carries distant basslines through a city built on reinvention and possibility.
          </p>

         <p className="seattle-tagline">
            Tonight, NeonVerse tunes into the world of ILOVEMAKONNEN — where futuristic melodies, after-hours energy, 
            and the electric spirit of Atlanta collide beneath a skyline glowing with tomorrow.
          </p>


          <p className="seattle-tagline">
            Expect deep synthwave, ambient electronic textures, 
            cinematic indie sounds, and late-night drive energy shaped by the pulse of Atlanta after dark.
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
   Artist of The Month - Ilovemakonnen
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
       
  href="https://soundcloud.com/ilovemakonnen-music"
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