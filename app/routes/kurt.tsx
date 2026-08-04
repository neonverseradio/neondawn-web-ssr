
import { Link } from "react-router";
import "../seattle.css";
import "../app.css";
import "../styles/soon.css";





{/* =========================== START OF THE JSX BODY ================================== */}
export default function Meeka() {     
const image =
    "/artists/lynney/meeka1.jpg";


  return (

    <main className="seattle-page">

      <section className="seattle-panel">


        <h1 className="seattle-title">
          Kurt
        </h1>


        <p className="seattle-tagline">
          The Sound of Future City
          <br />
          Defining Neon Vibes. 24/7.
        </p>


        <p>
          NeonVerse Radio – Seattle Transmission
        </p>

{/* START OF LYNNEY IMAGE */}

        <img
    src="/artists/kurt/album2.png"
    alt="Kurt — Artist of the Month"
    className="aotm-img"
  /> 
  <br /> <br />
  <img
    src="/artists/kurt/kurt1.png"
    alt="Kurt — Artist of the Month"
   
  /> 
{/* END OF LYNNEY IMAGE */}

        <section className="seattle-content">


          <h2 className="enter-button">
   Kurt
</h2><br />
 <a
          href="https://www.youtube.com/@mysticfeverofficial"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          ♫ When Angels Sing
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
    src="/artists/kurt/album1.png"
    alt="Kurt — Artist of the Month"
     />   <br /> 
    <img
     src="/artists/kurt/kurt2.png"
    alt="Kurt — Artist of the Month"
     />  
          
        <br />  
           <h2 className="enter-button">
   AOTM - Kurt  
</h2>


          <p>
            

This month, we feature Kurt: <br />
"Mystic Fever is an instrumental electronic music project by the Belgian composer Kurt
Vereecke, with a distinctive style in which beautiful melodies take center stage. Kurt
has been writing songs since he was young and has released several albums with his
AOR band Frozen Rain."</p> 


<p><i> source: Mystic Fever Press Release  </i></p>
 <br /> 
         
<h2>
 Out now: Kurt's songs are officially live on all streaming services! 
</h2>
<img
     src="/artists/kurt/kurt4.png"
    alt="Kurt — Artist of the Month"
     /> 
          <p>
            "Mystic Fever is rooted in a love of cool synth sounds, occasionally complemented by a
touch of guitar. Each composition strikes a balance between melodic accessibility and
detailed sound design, resulting in music that feels both introspective and spacious" 
            
<br /><br />
            "The debut single ‘When Angels Sing’, released on 31 July 2026, introduces the
signature blend of melodic synthesizer layers and subtle rhythms with atmospheric
production, offering a sound that sits comfortably between the worlds of chill synth and
modern synthwave. Welcome to the world of ‘Mystic Fever’!
All music written, played, recorded, mixed and mastered by Kurt Vereecke"
           
          </p><br />
            <p> source: Mystic Fever Press Release </p>
            <p>© & ℗ 2026 – Frozen Rain Productions</p>

           <h2>
            NeonVerse Review
          </h2>

{/* ============================ NEON CSS ============================================== */}
         <h4 className="neon-review-mini">
  Kurt Vereecke’s Mystic Fever emerges with When Angels Sing, 
  a spacious, melodic synth voyage where every layer feels hand‑crafted and emotionally tuned.  
  
  <br />
   It’s an introspective, atmospheric debut that blends chill‑synth warmth with modern synthwave clarity, 
   marking a confident new chapter from a seasoned composer stepping into the neon future.
</h4>




        </section>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<div class="v-space"></div>


        <a
       
  href="https://www.facebook.com/mysticfeverofficial"
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