function enterSite() {
  const intro = document.getElementById("intro");
  const app = document.getElementById("app");
  const neon = document.getElementById("neon-overlay");

  // Neon sweep
  neon.classList.add("active");

  // Fade out intro
  intro.classList.add("fade-out");

  setTimeout(() => {
    intro.style.display = "none";
    app.classList.remove("hidden");
    app.classList.add("show");
  }, 800);
}
