
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
          NIYA
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
    src="/artists/niya/niya1.jpg"
    alt="NIYA — Artist of the Month"
    className="aotm-img"
  /> 
  <br /> <br />
  <img
    src="/artists/niya/niya3.jpg"
    alt="Niya — Artist of the Month"
   
  /> 
{/* END OF LYNNEY IMAGE */}

        <section className="seattle-content">


          <h2 className="enter-button">
   Niya 
</h2><br />
 <a
          href="https://open.spotify.com/track/6JKm4nR3BWhkQBGNw7n9R5?go=1&sp_cid=bb1fc4eee0621f63c84315be3501aabd&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=360c54a984fd45ea"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          ♫ Alien Goddess
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
    src="/artists/niya/niya5.jpg"
    alt="Niya — Artist of the Month"
     />   <br /> 
    <img
     src="/artists/niya/niya2.jpg"
    alt="Niya — Artist of the Month"
     />  
          
        <br />  
           <h2 className="enter-button">
   AOTM - Niya  
</h2>


          <p>
            

This month, we feature Niya: <br />
"Known as The Alien Goddess, NIYA brings a fearless and highly visual approach to contemporary pop
combining infectious hooks, emotional songwriting and an unmistakably cosmic identity.

Her music moves between vulnerability, freedom, confidence and pure pop energy, 
creating a universe where music, fashion and character all become part of the transmission."</p> 


<p><i> source: NIYA Official Website  </i></p>
 <br /> 
         
<h2>
 Out now: Niya's songs are officially live on all streaming services! 
</h2>
<img
     src="/artists/niya/niya4.jpg"
    alt="Niya — Artist of the Month"
     /> 
          <p>
            "Alien Goddess introduces listeners directly into the NIYA universe — bold, 
            cinematic and unapologetically larger than life." 
            
<br /><br />
            "Blending vibrant pop production with emotional intensity and influences shaped by different cultures and experiences, 
            NIYA turns personal expression into something theatrical and highly visual. <br />
            The world surrounding the music is just as important as the sound itself: 
            an evolving cosmic identity built around the Alien Goddess, where strength, 
            passion, freedom and imagination collide.<br />
            Her latest Alien Goddess [Remix 01] pushes that world further, 
            transforming the track into another transmission from the expanding NIYA universe."
           
          </p><br />
            <p> source: NIYA Official Website </p>
            

           <h2>
            NeonVerse Review
          </h2>

{/* ============================ NEON CSS ============================================== */}
         <h4 className="neon-review-mini">
  NIYA arrives in the Future City like a transmission from another planet, 
  fearless cosmic pop powered by bold hooks, raw emotion and cinematic energy.  
  
  <br />
  Alien Goddess turns sound into its own universe, where vulnerability, 
  identity and an unmistakable presence collide beneath the NeonVerse skyline.
</h4>




        </section>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<div class="v-space"></div>


        <a
       
  href="https://niya.fi/#home"
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