(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });

  // Remove anchor (#) from URL on heading click
  document
    .querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
    .forEach((heading) => {
      heading.addEventListener("click", () => {
        if (window.location.hash) {
          history.replaceState(
            null,
            null,
            window.location.pathname + window.location.search
          );
        }
      });
    });
})();
