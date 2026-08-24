
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
          Arlin 
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
    src="/artists/arlin/arlin.jpg"
    alt="Arlin — Artist of the Month"
    className="aotm-img"
  /> 
  <br /> <br />
  <img
    src="/artists/arlin/arlin3.png"
    alt="Arlin — Artist of the Month"
   
  /> 
{/* END OF LYNNEY IMAGE */}

        <section className="seattle-content">


          <h2 className="enter-button">
   Arlin
</h2><br />
 <a
          href="https://open.spotify.com/track/0Slkwmqau9cTG68MCAkfHR"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          ♫ Baby You're a Big Star Now
        </a> <br />
         <a
          href="https://open.spotify.com/track/6IxAMjStyaimBRorpwsWA9"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          ♫ Bangkok Matinee
        </a> 

<div class="v-space"></div>
{/* START OF YOUTUBE VIEW */}
<div style={{ maxWidth: "300px", width: "100%", margin: "0 auto" }}>
  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
 <iframe
      src="https://www.youtube.com/embed/mDJR4zB_Ybk"
      title="Bangkok Matinee — YouTube Short"
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

{/* END OF YOUTUBE VIEW */}

<div className="nav-wrapper">  {/* NEON BORDER */}
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
</div>

{/* ============================ START OF LYNNEY REVIEW ============================================== */}
           <img
    src="/artists/arlin/arlin5.jpg"
    alt="Arlin — Artist of the Month"
     />   <br /> 
    <img
     src="/artists/arlin/arlin2.png"
    alt="Arlin — Artist of the Month"
     />  
          
        <br />  
           <h2 className="enter-button">
   AOTM - Arlin   
</h2>


          <p>
            

This month, we feature Arlin: <br />
“Arlin Godwin is a filmmaker, composer, and visual artist living in Washington, 
DC about six blocks from the big white mansion.
<br />
 He hasn’t borrowed sugar from his orange neighbor, 
but he has created award‑winning independent films, atmospheric electronic music, and striking photography.”</p> 


<p><i> source: Studio Life  </i></p>
 <br /> 
         
<h2>
 Out now: Arlin's songs are officially live on all streaming services! 
</h2>
<img
     src="/artists/arlin/arlin6.jpg"
    alt="Arlin — Artist of the Month"
     /> 
          <p>
            " ‘Baby You’re a Big Star Now’ channels early‑2000s house energy with a cinematic pulse — a bright, 
            feel‑good ignition track that blends retro dancefloor nostalgia with Arlin’s signature atmospheric production. " 
            
<br /><br />
            "It’s a party‑vibe lifter built for neon nights and Future City skylines."
           
          </p><br />
          <p>
Now we delve into one of his standout tracks, **“Bangkok Matinee”** 
a synth-driven electronic groove packed with **early-2000s nostalgia**. 
Punchy beats, atmospheric synths and a distinct **cyberpunk edge** 
give it the feeling of a neon-lit city in motion 

**yesterday’s vision of the future.**


          </p>
          {/*  <p> source:  Arlin Godwin Music </p>   */}
           
           <h2>
            NeonVerse Review
          </h2>

{/* ============================ NEON CSS ============================================== */}
         <h4 className="neon-review-mini">
  Arlin Godwin enters NeonVerse with a multi‑disciplinary spark
  a creator whose music, films, and visuals all share the same atmospheric DNA.  
  
  <br />
   Baby You’re a Big Star Now” brings a warm, early‑2000s house glow, 
   while his film work delivers the introspective, cinematic tension NeonVerse thrives on.
   <br />
   <p>It’s emotional.
   It’s atmospheric.
    It’s underground.
    It’s Future City.</p>
</h4>




        </section>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<div class="v-space"></div>


        <a
       
  href="https://arlingodwin.com/home"
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