import {
  useEffect,
  useRef,
  useState,
} from "react";

import "../styles/edge.css";


/* ---------------------------------------------------------
   NEONVERSE GLOBAL EDGE MENU SYSTEM
   --------------------------------------------------------- */

export default function Edge() {

  const [open, setOpen] = useState(false);

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);


  /* ---------------------------------------------------------
     EDGE MENU OPEN / CLOSE
     --------------------------------------------------------- */

  const show = () => {
    setOpen(true);
  };

  const hide = () => {
    setOpen(false);
  };


  /* ---------------------------------------------------------
     GLOBAL EDGE SYSTEM BRAIN
     --------------------------------------------------------- */

  useEffect(() => {

    const trigger = triggerRef.current;
    const menu = menuRef.current;

    if (!trigger || !menu) {
      return;
    }


    /* ---------------------------------------------------------
       DEVICE / VIEWPORT DETECTION
       ---------------------------------------------------------

       The Edge system checks:

       - Current browser width
       - Current browser height
       - Fine pointer support
       - Coarse pointer / touch support

       This lets the same global Edge component work across:

       - Desktop
       - Laptop
       - Phone
       - Tablet
       - Touchscreen devices
       --------------------------------------------------------- */

    const isTouchDevice = () => {

      const coarsePointer =
        window.matchMedia(
          "(pointer: coarse)"
        ).matches;

      const touchAvailable =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;

      const mobileViewport =
        window.innerWidth <= 768;

      return (
        coarsePointer ||
        touchAvailable ||
        mobileViewport
      );
    };


    const isDesktopDevice = () => {

      const finePointer =
        window.matchMedia(
          "(pointer: fine)"
        ).matches;

      return finePointer;
    };


    /* ---------------------------------------------------------
       VIEWPORT INFORMATION
       ---------------------------------------------------------

       Keeps track of the actual browser viewport.

       Example:

       Desktop
       1920 x 1080

       Phone
       390 x 844

       Rotated phone
       844 x 390
       --------------------------------------------------------- */

    let viewportWidth =
      window.innerWidth;

    let viewportHeight =
      window.innerHeight;

    let viewportCenterX =
      viewportWidth / 2;

    let viewportCenterY =
      viewportHeight / 2;


    /* ---------------------------------------------------------
       VIEWPORT UPDATE
       --------------------------------------------------------- */

    const updateViewport = () => {

      viewportWidth =
        window.innerWidth;

      viewportHeight =
        window.innerHeight;

      viewportCenterX =
        viewportWidth / 2;

      viewportCenterY =
        viewportHeight / 2;

      /*
       * These values are now available to the
       * Edge system whenever the device changes
       * size or orientation.
       */

      void viewportCenterX;
      void viewportCenterY;
    };


    window.addEventListener(
      "resize",
      updateViewport
    );

    window.addEventListener(
      "orientationchange",
      updateViewport
    );


    /* ---------------------------------------------------------
       DESKTOP FEATURE
       HOVER-BASED EDGE MENU
       --------------------------------------------------------- */

    const handleTriggerEnter = () => {

      if (!isDesktopDevice()) {
        return;
      }

      show();
    };


    const handleTriggerLeave = () => {

      if (!isDesktopDevice()) {
        return;
      }

      setTimeout(() => {

        if (!menu.matches(":hover")) {
          hide();
        }

      }, 50);
    };


    const handleMenuEnter = () => {

      if (!isDesktopDevice()) {
        return;
      }

      show();
    };


    const handleMenuLeave = () => {

      if (!isDesktopDevice()) {
        return;
      }

      setTimeout(() => {

        if (!trigger.matches(":hover")) {
          hide();
        }

      }, 50);
    };


    trigger.addEventListener(
      "mouseenter",
      handleTriggerEnter
    );

    trigger.addEventListener(
      "mouseleave",
      handleTriggerLeave
    );

    menu.addEventListener(
      "mouseenter",
      handleMenuEnter
    );

    menu.addEventListener(
      "mouseleave",
      handleMenuLeave
    );


    /* ---------------------------------------------------------
       MOBILE / TOUCH FEATURE
       STRICT HORIZONTAL SWIPE
       ---------------------------------------------------------

       The menu ONLY opens when:

       1. Device supports touch or mobile viewport
       2. Gesture travels RIGHT → LEFT
       3. Horizontal movement reaches 110px
       4. Horizontal movement is at least 2x vertical
       5. Vertical movement never becomes dominant

       Normal vertical scrolling will NOT open the menu.
       --------------------------------------------------------- */

    let startX = 0;
    let startY = 0;

    let currentX = 0;
    let currentY = 0;

    let tracking = false;
    let gestureLocked = false;


    /* ---------------------------------------------------------
       MOBILE SWIPE SETTINGS
       --------------------------------------------------------- */

    const swipeThreshold = 110;

    const verticalTolerance = 0.5;


    /* ---------------------------------------------------------
       TOUCH START
       --------------------------------------------------------- */

    const onTouchStart = (
      e: TouchEvent
    ) => {

      if (!isTouchDevice()) {
        return;
      }

      if (e.touches.length !== 1) {
        return;
      }

      const touch =
        e.touches[0];

      startX =
        touch.clientX;

      startY =
        touch.clientY;

      currentX =
        startX;

      currentY =
        startY;

      tracking = true;

      gestureLocked = false;
    };


    /* ---------------------------------------------------------
       TOUCH MOVE
       --------------------------------------------------------- */

    const onTouchMove = (
      e: TouchEvent
    ) => {

      if (
        !isTouchDevice() ||
        !tracking ||
        gestureLocked
      ) {
        return;
      }

      if (e.touches.length !== 1) {
        gestureLocked = true;
        return;
      }


      const touch =
        e.touches[0];


      currentX =
        touch.clientX;

      currentY =
        touch.clientY;


      const deltaX =
        startX - currentX;

      const deltaY =
        Math.abs(
          startY - currentY
        );


      /* -------------------------------------------------------
         VERTICAL GESTURE REJECTION
         -------------------------------------------------------

         If vertical movement becomes dominant,
         permanently cancel this swipe gesture.
         ------------------------------------------------------- */

      if (
        deltaY > 10 &&
        deltaY >
          Math.abs(deltaX) *
            verticalTolerance
      ) {

        gestureLocked = true;

      }
    };


    /* ---------------------------------------------------------
       TOUCH END
       --------------------------------------------------------- */

    const onTouchEnd = () => {

      if (
        !isTouchDevice() ||
        !tracking
      ) {
        return;
      }


      const deltaX =
        startX - currentX;

      const deltaY =
        Math.abs(
          startY - currentY
        );


      /* -------------------------------------------------------
         STRICT RIGHT → LEFT VALIDATION
         ------------------------------------------------------- */

      const isStrictHorizontalSwipe =

        deltaX >= swipeThreshold &&

        deltaX >
          deltaY * 2 &&

        !gestureLocked;


      if (
        isStrictHorizontalSwipe
      ) {

        show();

      }


      /* -------------------------------------------------------
         RESET TOUCH SYSTEM
         ------------------------------------------------------- */

      startX = 0;
      startY = 0;

      currentX = 0;
      currentY = 0;

      tracking = false;

      gestureLocked = false;
    };


    /* ---------------------------------------------------------
       TOUCH CANCEL
       ---------------------------------------------------------

       Mobile browsers can cancel gestures because of:

       - System gestures
       - Browser navigation
       - Interruptions
       - Multi-touch

       Reset the Edge gesture if that happens.
       --------------------------------------------------------- */

    const onTouchCancel = () => {

      startX = 0;
      startY = 0;

      currentX = 0;
      currentY = 0;

      tracking = false;

      gestureLocked = false;
    };


    /* ---------------------------------------------------------
       CLOSE MENU WHEN TAPPING OUTSIDE
       --------------------------------------------------------- */

    const onDocumentTouchStart = (
      e: TouchEvent
    ) => {

      if (!isTouchDevice()) {
        return;
      }

      const target =
        e.target as Node;


      if (
        !menu.contains(target)
      ) {

        hide();

      }
    };


    /* ---------------------------------------------------------
       MOBILE TOUCH LISTENERS
       --------------------------------------------------------- */

    document.addEventListener(
      "touchstart",
      onTouchStart,
      {
        passive: true,
      }
    );

    document.addEventListener(
      "touchmove",
      onTouchMove,
      {
        passive: true,
      }
    );

    document.addEventListener(
      "touchend",
      onTouchEnd,
      {
        passive: true,
      }
    );

    document.addEventListener(
      "touchcancel",
      onTouchCancel,
      {
        passive: true,
      }
    );

    document.addEventListener(
      "touchstart",
      onDocumentTouchStart,
      {
        passive: true,
      }
    );


    /* ---------------------------------------------------------
       GLOBAL EDGE SYSTEM CLEANUP
       --------------------------------------------------------- */

    return () => {

      window.removeEventListener(
        "resize",
        updateViewport
      );

      window.removeEventListener(
        "orientationchange",
        updateViewport
      );


      trigger.removeEventListener(
        "mouseenter",
        handleTriggerEnter
      );

      trigger.removeEventListener(
        "mouseleave",
        handleTriggerLeave
      );

      menu.removeEventListener(
        "mouseenter",
        handleMenuEnter
      );

      menu.removeEventListener(
        "mouseleave",
        handleMenuLeave
      );


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
        "touchcancel",
        onTouchCancel
      );

      document.removeEventListener(
        "touchstart",
        onDocumentTouchStart
      );

    };

  }, []);


  /* ---------------------------------------------------------
     EDGE MENU UI
     --------------------------------------------------------- */

  return (
    <>


      {/* -------------------------------------------------------
          INVISIBLE GLOBAL EDGE TRIGGER
         ------------------------------------------------------- */}

      <div
        id="edge-trigger"
        ref={triggerRef}
        aria-hidden="true"
      />


      {/* -------------------------------------------------------
          GLOBAL EDGE MENU
         ------------------------------------------------------- */}

      <div
        ref={menuRef}
        className={
          `edge-menu ${open ? "open" : ""}`
        }
      >


        {/* -----------------------------------------------------
            HOME
           ----------------------------------------------------- */}

        <div className="edge-icon">

          <img
            src="/edge/home.svg"
            alt="home"
          />

          <span className="hint">
            Home
          </span>

        </div>


        {/* -----------------------------------------------------
            ARTISTS
           ----------------------------------------------------- */}

        <div className="edge-icon">

          <img
            src="/edge/artists.svg"
            alt="artists"
          />

          <span className="hint">
            Artists
          </span>

        </div>


        {/* -----------------------------------------------------
            RADIO
           ----------------------------------------------------- */}

        <div className="edge-icon">

          <img
            src="/edge/radio.svg"
            alt="radio"
          />

          <span className="hint">
            Radio
          </span>

        </div>


        {/* -----------------------------------------------------
            ABOUT
           ----------------------------------------------------- */}

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