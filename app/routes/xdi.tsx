
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
          XD:I 
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
    src="/artists/xdi/1.png"
    alt="XD:I — Artist of the Month"
    className="aotm-img"
  /> 
  <br /> <br />
  <img
    src="/artists/xdi/7.png"
    alt="XD:I — Artist of the Month"
   
  /> 
{/* END OF LYNNEY IMAGE */}

        <section className="seattle-content">


          <h2 className="enter-button">
   XD:I
</h2><br />
 <a
          href="https://open.spotify.com/album/0FprVmIOAxDvEUMU1esBXx"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          ♫ Spray U
        </a> 

<div class="v-space"></div>
{/* START OF YOUTUBE VIEW */}
<div style={{ maxWidth: "300px", width: "100%", margin: "0 auto" }}>
  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
    <iframe
      src="https://www.youtube.com/embed/_hviy9B-3ow?si=xWDbED8LVmPOfaW8"
      title="XD:I — Spray U"
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
<br />
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
          </p> <br />
          </div>

{/* ============================ START OF LYNNEY REVIEW ============================================== */}
           <img
    src="/artists/xdi/3.png"
    alt="XD:I — Artist of the Month"
     />   <br /> 
    <img
     src="/artists/xdi/4.png"
    alt="XD:I — Artist of the Month"
     />  
          
        <br />  
           <img
    src="/artists/xdi/5.png"
    alt="XD:I — Artist of the Month"
     />   <br /> 
        <img
    src="/artists/xdi/6.png"
    alt="XD:I — Artist of the Month"
     />   <br /> 
           <h2 className="enter-button">
   AOTM - XD:I 
</h2>


          <p>
            

This month, we feature XD:I: <br />
“XD:I is a four‑member EDM project girl group under WAY2 built for neon stages, 
future‑city nights, and high‑voltage performance culture.
<br />
 They’re preparing for their first public appearance at E:ON on July 17, 2026, 
 stepping into the spotlight with a sound engineered for the next era of electronic K‑pop.”</p> 


<p><i> source: WAY2_XDI  </i></p>
 <br /> 
         
<h2>
 Out now: XD:I's songs are officially live on all streaming services! 
</h2>
<img
     src="/artists/xdi/2.png"
    alt="XD:I — Artist of the Month"
     /> 
          <p>
            "XD:I enters the scene with a hybrid EDM identity bright, cinematic, and built for ignition.
Their project sound blends club‑ready energy, atmospheric textures, and the emotional punch that defines Future City." 
            
<br /><br />
            "It’s performance‑driven. It’s K‑pop‑powered energy. It’s the electronic spark that lights the skyline."
           
          </p><br />
          {/*  <p> source:  Arlin Godwin Music </p>   */}
           
           <h2>
            NeonVerse Review
          </h2>

{/* ============================ NEON CSS ============================================== */}
         <h4 className="neon-review-mini">
  XD:I arrives with four distinct artistic signals, each carrying their own creative DNA.
  <br /><br />

  <strong>Betty:</strong> Sharp club‑vocal intensity with a DJ’s lift‑the‑room energy.
  <br />
  <strong>Swan:</strong> Cinematic emotion, depth, and multi‑talented artistry.
  <br />
  <strong>Hazé:</strong> Dreamy warmth, introspective tone, and a storyteller’s sensibility.
  <br />
  <strong>Kana:</strong> Modern, clean, future‑pop presence as the maknae.
  <br /><br />

  Together, they form a project engineered for NeonVerse emotional, atmospheric, underground,
  and unmistakably Future City Ready.
</h4>





        </section>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<div class="v-space"></div>


        <a
       
  href="https://open.spotify.com/artist/4E6sY8nUaJiyBnSO6FUWbW"
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