import "../../ai-lab.css";

export default function SubmitAIPage() {
  return (
    <main className="ai-page">
      <section className="ai-panel">

        {/* =====================================
            SUBMIT AI HERO
        ===================================== */}

        <header>
          <h1 className="ai-title">
            SUBMIT AI
          </h1>

          <h2 className="ai-hero-line">
            Send a new signal into the Lab.
          </h2>

          <p className="ai-tagline">
            New sounds. New creators. New intelligence.
          </p>
        </header>


        {/* =====================================
            SUBMIT TO AI LAB
        ===================================== */}

        <section className="ai-content">
          <h2>
            Submit to AI Lab
          </h2>

          <p>
            NeonVerse Radio&apos;s AI Lab accepts original
            AI-driven and AI-assisted music for airplay
            consideration.
          </p>

          <p>
            We keep submission simple.
            Choose the option that best describes how your
            music was created.
          </p>
        </section>


        {/* =====================================
            AI SUBMISSION CLASSIFICATION
        ===================================== */}

        <section className="ai-content">

          <h2>
            How was AI used?
          </h2>


          {/* FULLY AI GENERATED */}

          <div className="ai-submit-type">
            <h3>
              Fully AI-Generated
            </h3>

            <p>
              AI was the primary method used to create the work.
            </p>
          </div>


          {/* AI ASSISTED */}

          <div className="ai-submit-type">
            <h3>
              AI-Assisted
            </h3>

            <p>
              AI was used alongside meaningful human creative input.
            </p>
          </div>

        </section>
  {/* email address */}
      <section className="ai-content">
  <h2>Submission Contact</h2>

  <p>
    Send your AI music submission to:
  </p>

  <a
    href="mailto:neonverse.ailabs@outlook.com"
    className="ai-email-link"
  >
    neonverse.ailabs@outlook.com
  </a><br /> <br />
</section>
      </section>

    

    </main>
  );
}