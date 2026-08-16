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

    const handleTriggerEnter = () => {
      show();
    };

    const handleTriggerLeave = () => {
      setTimeout(() => {
        if (!menu?.matches(":hover")) {
          hide();
        }
      }, 50);
    };

    const handleMenuEnter = () => {
      show();
    };

    const handleMenuLeave = () => {
      setTimeout(() => {
        if (!trigger?.matches(":hover")) {
          hide();
        }
      }, 50);
    };

    trigger?.addEventListener(
      "mouseenter",
      handleTriggerEnter
    );

    trigger?.addEventListener(
      "mouseleave",
      handleTriggerLeave
    );

    menu?.addEventListener(
      "mouseenter",
      handleMenuEnter
    );

    menu?.addEventListener(
      "mouseleave",
      handleMenuLeave
    );

    /* ---------------------------------------------------------
       PHONE FEATURE — STRICT HORIZONTAL SWIPE
       ---------------------------------------------------------

       Mobile menu will ONLY open when:

       1. Gesture travels from RIGHT → LEFT
       2. Horizontal distance is at least 110px
       3. Horizontal movement is at least 2x vertical movement
       4. Gesture is completed before opening the menu

       Vertical scrolling will NOT activate the menu.
       Diagonal gestures will generally NOT activate the menu.
       --------------------------------------------------------- */

    if (window.innerWidth <= 768) {
      let startX = 0;
      let startY = 0;
      let currentX = 0;
      let currentY = 0;

      let tracking = false;
      let gestureLocked = false;

      const swipeThreshold = 110;

      /*
       * Once vertical movement becomes dominant,
       * permanently reject this touch gesture.
       */
      const verticalTolerance = 0.5;

      const onTouchStart = (e: TouchEvent) => {
        const touch = e.touches[0];

        startX = touch.clientX;
        startY = touch.clientY;

        currentX = startX;
        currentY = startY;

        tracking = true;
        gestureLocked = false;
      };

      const onTouchMove = (e: TouchEvent) => {
        if (!tracking || gestureLocked) {
          return;
        }

        const touch = e.touches[0];

        currentX = touch.clientX;
        currentY = touch.clientY;

        const deltaX = startX - currentX;
        const deltaY = Math.abs(startY - currentY);

        /*
         * If the gesture is moving vertically,
         * abandon it completely.
         *
         * This prevents normal up/down page scrolling
         * from accidentally activating the menu.
         */
        if (
          deltaY > 10 &&
          deltaY > deltaX * verticalTolerance
        ) {
          gestureLocked = true;
        }
      };

      const onTouchEnd = () => {
        if (!tracking) {
          return;
        }

        const deltaX = startX - currentX;
        const deltaY = Math.abs(startY - currentY);

        /*
         * STRICT RIGHT → LEFT REQUIREMENTS
         *
         * deltaX must:
         * - be positive
         * - reach 110px
         * - be at least twice the vertical movement
         */
        const isStrictHorizontalSwipe =
          deltaX >= swipeThreshold &&
          deltaX > deltaY * 2 &&
          !gestureLocked;

        if (isStrictHorizontalSwipe) {
          show();
        }

        /*
         * Reset gesture state.
         */
        startX = 0;
        startY = 0;
        currentX = 0;
        currentY = 0;

        tracking = false;
        gestureLocked = false;
      };

      /*
       * Close menu when tapping outside it.
       */
      const onDocumentTouchStart = (e: TouchEvent) => {
        const target = e.target as Node;

        if (menu && !menu.contains(target)) {
          hide();
        }
      };

      document.addEventListener(
        "touchstart",
        onTouchStart,
        { passive: true }
      );

      document.addEventListener(
        "touchmove",
        onTouchMove,
        { passive: true }
      );

      document.addEventListener(
        "touchend",
        onTouchEnd,
        { passive: true }
      );

      document.addEventListener(
        "touchstart",
        onDocumentTouchStart,
        { passive: true }
      );

      /* ---------------------------------------------------------
         MOBILE CLEANUP
         --------------------------------------------------------- */

      return () => {
        document.removeEventListener(
          "touchstart",
          onTouchStart
        );

        document.removeEventListener(
          "touchmove",
          onTouchMove
        );

        document.removeEventListener(
          "touchend",
          onTouchEnd
        );

        document.removeEventListener(
          "touchstart",
          onDocumentTouchStart
        );

        trigger?.removeEventListener(
          "mouseenter",
          handleTriggerEnter
        );

        trigger?.removeEventListener(
          "mouseleave",
          handleTriggerLeave
        );

        menu?.removeEventListener(
          "mouseenter",
          handleMenuEnter
        );

        menu?.removeEventListener(
          "mouseleave",
          handleMenuLeave
        );
      };
    }

    /* ---------------------------------------------------------
       DESKTOP CLEANUP
       --------------------------------------------------------- */

    return () => {
      trigger?.removeEventListener(
        "mouseenter",
        handleTriggerEnter
      );

      trigger?.removeEventListener(
        "mouseleave",
        handleTriggerLeave
      );

      menu?.removeEventListener(
        "mouseenter",
        handleMenuEnter
      );

      menu?.removeEventListener(
        "mouseleave",
        handleMenuLeave
      );
    };
  }, []);

  return (
    <>
      {/* Invisible desktop hover trigger */}
      <div id="edge-trigger"></div>

      {/* Edge Menu */}
      <div
        className={`edge-menu ${open ? "open" : ""}`}
      >
        <div className="edge-icon">
          <img
            src="/edge/home.svg"
            alt="home"
          />
          <span className="hint">
            Home
          </span>
        </div>

        <div className="edge-icon">
          <img
            src="/edge/artists.svg"
            alt="artists"
          />
          <span className="hint">
            Artists
          </span>
        </div>

        <div className="edge-icon">
          <img
            src="/edge/radio.svg"
            alt="radio"
          />
          <span className="hint">
            Radio
          </span>
        </div>

        <div className="edge-icon">
          <img
            src="/edge/about.svg"
            alt="about"
          />
          <span className="hint">
            About
          </span>
        </div>
      </div>
    </>
  );
}