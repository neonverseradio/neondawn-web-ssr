import { useState, useEffect } from "react";
import "../styles/edge.css";

export default function Edge() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById("edge-trigger");
    const menu = document.querySelector(".edge-menu");

    const show = () => setOpen(true);
    const hide = () => setOpen(false);

    /* ---------------------------------------------------------
       DESKTOP FEATURE — Hover-based Edge Menu
       --------------------------------------------------------- */
    trigger?.addEventListener("mouseenter", show);

    trigger?.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!menu?.matches(":hover")) hide();
      }, 50);
    });

    menu?.addEventListener("mouseenter", show);

    menu?.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!trigger?.matches(":hover")) hide();
      }, 50);
    });

    /* ---------------------------------------------------------
       PHONE FEATURE — Global Swipe-Left Gesture
       --------------------------------------------------------- */
    if (window.innerWidth <= 768) {
      let startX = 0;
      let currentX = 0;
      const swipeThreshold = 50; // distance required to trigger

      const onTouchStart = (e) => {
        startX = e.touches[0].clientX;
        currentX = startX;
      };

      const onTouchMove = (e) => {
        currentX = e.touches[0].clientX;

        // Detect swipe-left gesture
        if (startX - currentX > swipeThreshold) {
          show();
        }
      };

      const onTouchEnd = () => {
        startX = 0;
        currentX = 0;
      };

      document.addEventListener("touchstart", onTouchStart);
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);

      // Tap outside closes menu
      document.addEventListener("touchstart", (e) => {
        if (!menu?.contains(e.target)) hide();
      });

      // Cleanup mobile listeners
      return () => {
        document.removeEventListener("touchstart", onTouchStart);
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
        document.removeEventListener("touchstart", hide);
      };
    }

    /* ---------------------------------------------------------
       END PHONE FEATURE
       --------------------------------------------------------- */

    return () => {
      trigger?.removeEventListener("mouseenter", show);
      trigger?.removeEventListener("mouseleave", hide);
      menu?.removeEventListener("mouseenter", show);
      menu?.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <>
      <div id="edge-trigger"></div>

      <div className={`edge-menu ${open ? "open" : ""}`}>
        <div className="edge-icon">
          <img src="/edge/home.svg" alt="home" />
          <span className="hint">Home</span>
        </div>

        <div className="edge-icon">
          <img src="/edge/artists.svg" alt="artists" />
          <span className="hint">Artists</span>
        </div>

        <div className="edge-icon">
          <img src="/edge/radio.svg" alt="radio" />
          <span className="hint">Radio</span>
        </div>

        <div className="edge-icon">
          <img src="/edge/about.svg" alt="about" />
          <span className="hint">About</span>
        </div>
      </div>
    </>
  );
}
