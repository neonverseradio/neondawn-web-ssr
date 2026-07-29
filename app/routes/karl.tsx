
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
          Karl WBA
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
    src="/artists/karl/wba1.jpg"
    alt="Karl — Artist of the Month"
    className="aotm-img"
  /> 
  <br /> <br />
  <img
    src="/artists/karl/karl.png"
    alt="karl — Artist of the Month"
   
  /> 
{/* END OF LYNNEY IMAGE */}

        <section className="seattle-content">


          <h2 className="enter-button">
   Karl - WBA
</h2><br />
 <a
          href="https://www.youtube.com/watch?v=NZ4Of3lID84&list=RDNZ4Of3lID84&start_radio=1"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          ♫ Hacker
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
    src="/artists/karl/wba2.jpg"
    alt="Karl — Artist of the Month"
     />   <br /> 
    <img
    src="/artists/karl/wba5.png"
    alt="Karl — Artist of the Month"
     />  
          
          
           <h2 className="enter-button">
   COMING SOON - Karl - WBA
</h2>


          <p>
            

This month, we feature Karl <br />
Karl Casey — the mind behind White Bat Audio — stands as one of the most influential forces in modern synthwave. 
For over 15 years, he’s carved out a sonic universe where retro horror, sci‑fi atmospheres, 
and cyberpunk tension collide with razor‑sharp production and unmistakable guitar-driven energy. 
His work has become a staple for creators, filmmakers, game developers, and synthwave fans worldwide.
 <br /> 
          </p>
<h2>
 Out now: Karl's songs are officially live on all streaming services! 
</h2>
<img
    src="/artists/karl/wba4.jpg"
    alt="Karl — Artist of the Month"
     /> 
          <p>
            Karl’s catalog is a masterclass in mood-building. 
            His tracks move like scenes from neon‑lit thrillers — pulsing basslines, dystopian pads, 
            and riffs that feel pulled straight from forgotten VHS nightmares. 
            Whether it’s retro horror, sci‑fi ambience, or dark cyberpunk synthwave, 
            Karl’s music doesn’t just accompany visuals — it creates them.
<br />
    Cinematic synthwave — atmospheric, brooding, immersive

    Thrash/death metal riffs — aggressive, high‑octane, unmistakably Karl

    Hybrid soundtracks — perfect for creators who need tension, adrenaline, or retro futurism


<br />
          </p>


          <h2>
            NeonVerse Review
          </h2>

{/* ============================ NEON CSS ============================================== */}
         <h4 className="neon-review-mini">
  Karl Casey is a veteran producer and guitarist with over 15 years of experience, 
  known for shaping the dark‑synth, retro‑horror, 
  and cyberpunk sound under his project White Bat Audio. 
  <br />
  He blends cinematic synthwave with thrash‑infused riffs, 
  creating atmospheric music that’s become a go‑to soundtrack for creators, 
  filmmakers, and game developers.
</h4>




        </section>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<div class="v-space"></div>


        <a
       
  href="https://whitebataudio.com/"
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