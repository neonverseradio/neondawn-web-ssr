
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
          The Octopus Division
        </h1>


        <p className="seattle-tagline">
          The Sound of Future City
          <br />
          Defining Neon Vibes. 24/7.
        </p>


        <p>
          NeonVerse Radio – San Diego Transmission
        </p>

{/* START OF LYNNEY IMAGE */}

        <img
    src="/artists/octopus/matthew4.jpg"
    alt="The Octopus Division — Artist of the Month"
    className="aotm-img"
  /> 
  <br /> <br />
  <img
    src="/artists/octopus/matthew.png"
    alt="The Octopus Division — Artist of the Month"
   
  /> 
{/* END OF LYNNEY IMAGE */}

        <section className="seattle-content">


          <h2 className="enter-button">
   The Octopus Division 
</h2><br />
 <a
          href="https://open.spotify.com/track/2paf1yRd1fyoYxr8gvRyxD"
          target="_blank"
          rel="noreferrer"
          className="seattle-button"
        >
          ♫ Without You
        </a> 

<div class="v-space"></div>
{/* START OF YOUTUBE EMBED FRAME */}
<div style={{ maxWidth: "300px", width: "100%", margin: "0 auto" }}>
  <div style={{ position: "relative", paddingBottom: "177.78%", height: 0, overflow: "hidden" }}>
    <iframe
      src="https://www.youtube.com/embed/EqzMldqy7i4"
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
            Palm trees fade into silhouettes.
Neon burns against the Pacific horizon.
The night drive begins.
          </p>

         <p className="seattle-tagline">
            Welcome to the San Diego Transmission 
            a sun-soaked retro signal arriving in the Future City from Southern California.
          </p>


         <p className="seattle-tagline">
            Expect modern synth-pop, infectious hooks, dance rhythms and unmistakable echoes of the 80s — 
            music built for coastal highways, glowing arcades and late-night drives beneath electric skies.
          </p>

{/* ============================ START OF LYNNEY REVIEW ============================================== */}
           <img
     src="/artists/octopus/cover3.png"
    alt="The Octopus Division — Artist of the Month"
     />   <br /> 
    <img
     src="/artists/octopus/matthew2.jpg"
    alt="The Octopus Division — Artist of the Month"
     />  
          
        <br />  
           <h2 className="enter-button">
   AOTM - The Octopus Division  
</h2>


          <p>
            

This month, we feature Matt Muncie — The Octopus Division. <br />
"The Octopus Division is a San Diego-based modern synth-pop project created by Matt Muncie, 
combining catchy hooks, dance rhythms and a deep love of the sounds and imagination of the 1980s.

Drawing inspiration from Depeche Mode, Erasure, Pet Shop Boys and other defining artists of the era, Matt brings those influences into his own modern synth universe — 
writing songs inspired by everything from emotions and everyday life to science fiction, movies and comic-book heroes."</p> 




<p><i> source: The Octopus Division EPK  </i></p>
 <br /> 
         
<h2>
 Out now: Matt Muncie's songs are officially live on all streaming services! 
</h2>
<img
     src="/artists/octopus/matthew3.jpg"
    alt="The Octopus Division — Artist of the Month"
     /> 
          <p>
Behind the synthesizers is more than three decades of musical experience.

Before launching The Octopus Division, Matt built a career as a drummer spanning over 30 years, 
performing everywhere from intimate coffee shops to audiences of more than 500 people.

In 2024, he turned toward his longtime love of 80s synth music and launched his first solo endeavor:

The Octopus Division.

</p><br />
            <p> source: The Octopus Division EPK </p>
            

           <h2>
            NeonVerse Review
          </h2>

{/* ============================ NEON CSS ============================================== */}
         <h4 className="neon-review-mini">
  "The Octopus Division feels immediately at home beneath the Future City skyline. 
  Without You carries the warmth and nostalgia of classic synth-pop through bright electronics,
  memorable hooks and Matt Muncie's distinctive vocal delivery.  
  
  <br />
  There's genuine history behind the sound too — 
  three decades of musicianship feeding a new solo project that isn't simply revisiting the 80s,
  but having fun transmitting its spirit into the present."
</h4>




        </section>
{/* ============================ CSS REUSABLE VERTICAL SPACE ============================================== */}
<div class="v-space"></div>


        <a
       
  href="https://theoctopusdivision.com/home"
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