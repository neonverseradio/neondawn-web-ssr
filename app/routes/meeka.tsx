
import { Link } from "react-router";
import "../seattle.css";
import "../app.css";

{/* =========================== START OF THE JSX BODY ================================== */}
export default function Meeka() {     
const image =
    "/artists/lynney/meeka1.jpg";


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
    src="/artists/meeka/meeka3.jpg"
    alt="Meeka — Artist of the Month"
    className="aotm-img"
  /> 
  <br /> <br />
  <img
    src="/artists/meeka/meeka1.jpg"
    alt="Meeka — Artist of the Month"
   
  /> 
{/* END OF LYNNEY IMAGE */}

        <section className="seattle-content">


          <h2 className="enter-button">
   Meeka
</h2><br />
 <a
          href="https://open.spotify.com/artist/1NIl8MX7BW7Cs8Z8cZsL2O"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          ♫ Dissociate
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
    src="/artists/meeka/meeka4.jpg"
    alt="Meeka — Artist of the Month"
     />   <br /> 
    <img
    src="/artists/meeka/meeka2.jpg"
    alt="Meeka — Artist of the Month"
     />  
          
          
           <h2 className="enter-button">
   COMING SOON - Meeka
</h2>


          <p>
            

This month, we feature MEEKA <br />
MEEKA is an indie-pop artist creating dreamy, emotional music 
that blends indie textures with nostalgic melodies and atmospheric soundscapes. 
Her songs explore love, loss, healing, and self-discovery through 
intimate lyrics and hypnotic rhythms. With a cinematic yet personal sound, 
MEEKA crafts music for late nights, deep feelings, 
and the quiet journey of becoming who you’re meant to be. 
 <br /> 
          </p>
<h2>
 Out now: Meeka's songs are officially live on all streaming services! 
</h2>
<img
    src="/artists/meeka/meeka6.jpg"
    alt="Meeka — Artist of the Month"
     /> 
          <p>
            When Dissociate first slipped into the NeonVerse rotation, it didn’t arrive with force — 
            it arrived like a memory. Soft, cinematic, and quietly disarming, 
            the kind of song that doesn’t ask for attention so much as it pulls you inward. 
            It stood apart not through volume, but through atmosphere, emotional detail, 
            and a sense of distance that lingered long after the final echo faded. 
<br /><br />
            That same emotional subtlety defines Meeka, an indie‑pop artist from Oregon crafting dreamy, 
            intimate music shaped by nostalgia, late‑night reflection, and a lifelong love of singing. 
            Blending dream‑pop haze, indie textures, and cinematic warmth, 
            she explores love, loss, healing, and self‑discovery with a voice 
            that feels close and human. Supported creatively by her husband Kid Legacy, 
            Meeka continues to build a sound that feels personal, atmospheric, 
            and quietly transformative. 
          </p>


          <h2>
            NeonVerse Review
          </h2>

{/* ============================ NEON CSS ============================================== */}
         <h4 className="neon-review-mini">
  “Dissociate” drifts into the NeonVerse like a soft memory — atmospheric, intimate, and quietly disarming. 
  
  <br />
  Meeka carries that same emotional subtlety, shaping dreamy indie‑pop 
  transmissions that linger long after the final echo fades.
</h4>




        </section>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<div class="v-space"></div>


        <a
       
  href="https://www.instagram.com/meekaofficialig/"
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