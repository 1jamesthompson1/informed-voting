// Small shared behaviours for the static pages.
(function () {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Add safe external-link behaviour to links that leave the site.
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    try {
      const url = new URL(link.href);
      if (url.origin !== window.location.origin) {
        link.setAttribute("rel", "noopener");
        if (!link.hasAttribute("target")) link.setAttribute("target", "_blank");
      }
    } catch {
      // Ignore malformed URLs.
    }
  });
})();
