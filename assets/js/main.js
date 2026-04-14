(() => {
  const lang = document.documentElement.lang || "";
  const isEn = lang.toLowerCase().startsWith("en");
  const themeLabels = isEn
    ? { toDark: "Switch to dark mode", toLight: "Switch to light mode" }
    : { toDark: "Ativar modo escuro", toLight: "Ativar modo claro" };

  // Theme switch with improved accessibility and performance
  const body = document.body;
  const lamp = document.getElementById("mode");

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
      lamp.setAttribute("aria-label", themeLabels.toDark);
      lamp.setAttribute("title", themeLabels.toDark);
    } else {
      // "light", null, or first visit: default appearance is light → switch to dark
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
      lamp.setAttribute("aria-label", themeLabels.toLight);
      lamp.setAttribute("title", themeLabels.toLight);
    }
  };

  // Add keyboard support for theme toggle
  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  lamp.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTheme(localStorage.getItem("theme"));
    }
  });

  // Set initial aria labels (match page language)
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    lamp.setAttribute("aria-label", themeLabels.toLight);
    lamp.setAttribute("title", themeLabels.toLight);
  } else {
    lamp.setAttribute("aria-label", themeLabels.toDark);
    lamp.setAttribute("title", themeLabels.toDark);
  }

  // Blur the content when the menu is open with better performance
  const cbox = document.getElementById("menu-trigger");
  const area = document.querySelector(".wrapper");

  cbox.addEventListener("change", function () {
    // Use requestAnimationFrame for smooth transitions
    requestAnimationFrame(() => {
      this.checked
        ? area.classList.add("blurry")
        : area.classList.remove("blurry");
    });
  });

  // Improved heading click handler with better URL management
  const headings = document.querySelectorAll(
    "h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"
  );

  headings.forEach((heading) => {
    // Add cursor pointer for better UX
    heading.style.cursor = "pointer";

    heading.addEventListener("click", (e) => {
      // Prevent default if clicking on anchor links
      if (e.target.tagName === "A") return;

      if (window.location.hash) {
        // Use replaceState for better browser history management
        history.replaceState(
          null,
          null,
          window.location.pathname + window.location.search
        );
      }
    });

    // Add keyboard navigation support
    heading.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        heading.click();
      }
    });
  });

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add loading state management
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
})();
