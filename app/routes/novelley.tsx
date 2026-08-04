
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
          Novelley
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
    src="/artists/novelley/album1.jpg"
    alt="Meeka — Artist of the Month"
    className="aotm-img"
  /> 
  <br /> <br />
  <img
    src="/artists/novelley/novelley2.jpg"
    alt="Novelley — Artist of the Month"
   
  /> 
{/* END OF LYNNEY IMAGE */}

        <section className="seattle-content">


          <h2 className="enter-button">
   Novelley
</h2><br />
 <a
          href="https://open.spotify.com/track/3KbyUdNhceJeu9kWmO7LFC?si=25c123defd424f54&nd=1&dlsi=f7cc6f2ac8ca4a8c&autoplay_ok=1"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          ♫ Lost Ally
        </a> <br />
         <a
          href="https://open.spotify.com/album/5yg5MXo95nVfRUD70ZLhMn"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          ♫ Time and Space
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
    src="/artists/novelley/novelley1.png"
    alt="Novelley — Artist of the Month"
     />   <br /> 
    <img
     src="/artists/novelley/novelley3.jpg"
    alt="Novelley — Artist of the Month"
     />  
          
        <br />  
           <h2 className="enter-button">
   AOTM - Novelley 
</h2>


          <p>
            

This month, we feature Novelley: <br />
"Singer-songwriter Novelley unveils her
latest single, Lost Ally, an atmospheric
dream pop song that explores the
painful themes of betrayal and loss." 
className="aotm-img"</p> 

<p>
            "Wrapped in ethereal soundscapes and
            intimate lyricism, Lost Ally tells the
            story of a relationship that has quietly
            fallen apart, someone who was once
            deeply trusted but slowly drifted away." 
</p>

<p><i> source: Novelley Press Release  </i></p>
 <br /> 
         
<h2>
 Out now: Novelley's songs are officially live on all streaming services! 
</h2>
<img
     src="/artists/novelley/novelley5.jpg"
    alt="Novelley — Artist of the Month"
     /> 
          <p>
            "Wrapped in ethereal soundscapes and
            intimate lyricism, Lost Ally tells the
            story of a relationship that has quietly
            fallen apart, someone who was once
            deeply trusted but slowly drifted away." 
            source: Novelle Press Release
<br /><br />
            "Novelley is a singer-songwriter,
producer and multi-
instrumentalist whose music
blends the intimacy of indie folk
with the atmospheric textures of
dream pop. With a background in
classical music, she began
composing solo piano pieces,
instrumental works and choral
music before discovering her
voice as a songwriter while
studying medicine in Argentina
and the United States.
"
           
          </p><br />
           <i> source: Novelle Press Release </i>
            <p>Contact: novelleymusic@gmail.com</p>

           <h2>
            NeonVerse Review
          </h2>

{/* ============================ NEON CSS ============================================== */}
         <h4 className="neon-review-mini">
  Novelley blends indie‑folk intimacy with dream‑pop atmosphere, 
  channeling her classical roots and global journey from 
  Buenos Aires to Germany into a sound that feels both fragile and luminous.  
  
  <br />
  Her songs explore mental health, loss, and quiet hope, 
  drifting between acoustic warmth and electronic night‑scapes 
  with a voice that glows unmistakably in the NeonVerse.
</h4>




        </section>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<div class="v-space"></div>


        <a
       
  href="https://novelleymusic.com/"
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