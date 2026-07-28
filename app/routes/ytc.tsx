import "../seattle.css";
import "../app.css";
import "../styles/soon.css";

export default function AOTM() {
  return (
    <main className="soon-page">

      <div className="signal-frame">

        <h1 className="station-title">
         NEONVERSE RADIO
        </h1>

        <h2 className="station-subtitle">
        Yellow Trash Can - YTC
        </h2>

        <div className="divider"></div>

        <h3 className="aotm-title">
          ⒶⓇⓉⒾⓈⓉ ⓄⒻ ⓉⒽⒺ ⓂⓄⓃⓉⒽ
        </h3>

        <h3 className="encrypted">
            TRANSMISSION ENCRYPTED
                  </h3>
                   <h1 className="seattle-title">
          COMING SOON
        </h1>

        <p>
          Incoming signal detected...
        </p>

        <p>
          Public access level confirmed.
        </p>

        <pre className="terminal">
{`████████████████████████████████████████

 SIGNAL STATUS ...... ONLINE
 FREQUENCY .......... NVR-01
 TRANSMISSION ....... ACTIVE
 AOTM FILE .......... CLASSIFIED
 DECRYPTION ......... 32%
 ACCESS LEVEL ....... PUBLIC

████████████████████████████████████████`}
        </pre>

        <p>
          The next <strong>NeonVerse Artist of the Month</strong> has
          already been selected.
        </p>

        <p>
          The identity remains encrypted until the official broadcast.
        </p>

        <div className="divider"></div>

        <h3 className="log-title">
          TRANSMISSION LOG
        </h3>

        <pre className="terminal log">
{`> Scanning local frequencies...

> Connecting to Future City Network...

> Synchronizing broadcast...

> Artist profile located...

> SECURITY LOCK ENABLED

> Awaiting authorization...

> Awaiting official release...
`}
        </pre>

        <div className="divider"></div>

        <h2 className="stay-tuned">
          STAY TUNED
        </h2>

        <p className="message">
          This transmission will automatically unlock once the next
          Artist of the Month has been officially revealed.
        </p>

        <div className="footer-block">

          <p>NEONVERSE RADIO</p>

          <p>TORONTO • CANADA</p>

          <p>THE SOUND OF FUTURE CITY</p>

        </div>

      </div>

    </main>
  );
}