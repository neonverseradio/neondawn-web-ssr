
import { Link } from "react-router";
import "../seattle.css";
import "../app.css";

{/* =========================== START OF THE JSX BODY ================================== */}
export default function Meeka() {     
const image =
    "/artists/martyrs/martyrs1.jpg";


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
    src="/artists/martyrs/martyrs3.jpg"
    alt="Martyrs — Artist of the Month"
    className="aotm-img"
  /> 
  <br /> <br />
  <img
    src="/artists/martyrs/martyrs2.jpg"
    alt="Martyrs — Artist of the Month"
   
  /> 
{/* END OF LYNNEY IMAGE */}

        <section className="seattle-content">


          <h2 className="enter-button">
   Martyrs
</h2><br />
 <a
          href="https://open.spotify.com/album/5Ni9V1iT9WxKS0fDs1oxSQ"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          Church Street EP
        </a>
        {/* =========== CSS HORRIZONTAL SPACER ============== */}
<span class="h-spacer"></span>
        <a
          href="https://open.spotify.com/track/6b44kQ0Y22PnPTlEmHcJSb"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          Twist the Cap 
        </a>
         {/* =========== CSS HORRIZONTAL SPACER ============== */}
<span class="h-spacer"></span>
        <a
          href="https://open.spotify.com/album/4m6GV4PMsURrh8aXCA2TNv"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          Drowning Days 
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
    src="/artists/martyrs/martyrs4.jpg"
    alt="Martyrs — Artist of the Month"
     />   <br /> 
    <img
    src="/artists/martyrs/martyrs5.jpg"
    alt="Martyrs — Artist of the Month"
     />  
          
          
           <h2 className="enter-button">
   COMING SOON - Martyrs
</h2>


          <p>
            

This month, we feature Martyrs <br />
 a duo whose long-running creative partnership began in a high-school band 
 in Merthyr Tydfil  and continues today from their home on the Kentish coast. 
 Their steady DIY approach and evolving catalog have built a growing steady community 
 that follows each new chapter of their work. 
 <br /> 
          </p>
<h2>
 Out now: Martyrs songs are officially live on all streaming services! 
</h2>
<img
    src="/artists/martyrs/martyrs1.jpg"
    alt="Martyrs — Artist of the Month"
     /> 
          <p>
           When Church Street first entered NeonVerse rotation, 
           it immediately stood apart from the noise — 
           not through volume or spectacle, but through atmosphere, 
           emotional detail, and a sense of distance that lingered long after the track ended.

          Now, MARTYRS return with Twist The Cap, a late-night ballad 
          built on delicate instrumentation and sweeping synth textures 
          that feel perfectly suited for solitary drives beneath 
          rain-soaked streetlights and fading city reflections after midnight. 
<br /><br />
            There’s a quiet cinematic quality running through their work — 
            songs that unfold slowly, patiently, revealing emotional weight 
            through texture, memory, and space rather than excess. 
            In a musical landscape often dominated by immediacy, 
            MARTYRS lean into atmosphere and restraint, allowing each arrangement room to breathe. 

            Both Church Street and Twist The Cap now sit naturally 
            within the NeonVerse Radio rotation — immersive, melancholic 
            transmissions carried somewhere between underground alternative, 
            emotional synth-pop, and late-night electronic drift.

            For listeners searching for music that feels reflective, human, 
            and timeless beneath neon skies, MARTYRS are a signal worth holding onto.” 
          </p>


          <h2>
            NeonVerse Review
          </h2>

{/* ============================ NEON CSS ============================================== */}
         <h4 className="neon-review-mini">
  “Martyrs continue to carve out their own quiet corner of the NeonVerse signal, 
  crafting music that pulls you inward through texture, restraint, and emotional distance. 
  
  <br />
  Their latest work drifts like a midnight transmission constantly evolving — 
  patient, cinematic,energetic and built for solitary drives 
  beneath rain‑washed streetlights and fading city reflections.
</h4>




        </section>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<div class="v-space"></div>


        <a
       
  href="https://martyrsuk.bandcamp.com/music"
  target="_blank"
  rel="noreferrer"
  className="enter-button"
  style={{ fontSize: "1.8rem" }}
>
  Enter Signal
</a>



      </section>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<div class="v-space"></div>

    </main>

  );
}