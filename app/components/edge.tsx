import { useState, useEffect } from "react";
import "../styles/edge.css";

export default function Edge() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById("edge-trigger");
    const menu = document.querySelector(".edge-menu");

    const show = () => setOpen(true);
    const hide = () => setOpen(false);

    // Open when entering trigger zone
    trigger?.addEventListener("mouseenter", show);

    // Close only if mouse is NOT inside menu
    trigger?.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!menu?.matches(":hover")) hide();
      }, 50);
    });

    // Keep open while hovering menu
    menu?.addEventListener("mouseenter", show);

    // Close only if mouse is NOT inside trigger zone
    menu?.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!trigger?.matches(":hover")) hide();
      }, 50);
    });

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
