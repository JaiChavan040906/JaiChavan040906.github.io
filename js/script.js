/* ==========================================================================
   Jai Chavan - Personal Portfolio
   Stage 1: mobile navigation, scrolled header, active link, footer year.
   Plain vanilla JavaScript - no libraries or build step.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     1. MOBILE NAVIGATION
     The button controls both the CSS class that shows the panel and the
     aria-expanded attribute that tells screen readers its state.
     ------------------------------------------------------------------ */
  var navToggle = document.getElementById("nav-toggle");
  var navMenu = document.getElementById("nav-menu");

  function setMenu(isOpen) {
    navMenu.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  }

  function isMenuOpen() {
    return navToggle.getAttribute("aria-expanded") === "true";
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      setMenu(!isMenuOpen());
    });

    // Tapping a link should close the panel, otherwise it covers the section
    // the user just jumped to.
    navMenu.addEventListener("click", function (event) {
      if (event.target.classList.contains("nav__link")) {
        setMenu(false);
      }
    });

    // Escape closes the menu and returns focus to the button.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isMenuOpen()) {
        setMenu(false);
        navToggle.focus();
      }
    });

    // Reset the menu when the viewport grows back to desktop width, so it is
    // never left in a half-open state.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 860 && isMenuOpen()) {
        setMenu(false);
      }
    });
  }

  /* ------------------------------------------------------------------
     2. HEADER SHADOW ON SCROLL
     ------------------------------------------------------------------ */
  var header = document.getElementById("site-header");

  function updateHeader() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  /* ------------------------------------------------------------------
     3. ACTIVE NAVIGATION LINK
     IntersectionObserver reports which section is on screen, which is far
     cheaper than recalculating positions on every scroll event.
     ------------------------------------------------------------------ */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav__link")
  );

  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          navLinks.forEach(function (link) {
            var isCurrent =
              link.getAttribute("href") === "#" + entry.target.id;
            link.classList.toggle("is-active", isCurrent);
          });
        });
      },
      // Treat the middle band of the viewport as "current".
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ------------------------------------------------------------------
     4. FOOTER YEAR
     Keeps the copyright year correct without editing the HTML each year.
     ------------------------------------------------------------------ */
  var yearEl = document.getElementById("footer-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
