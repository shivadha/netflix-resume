function enterSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}

function enterSite() {
  const intro = document.getElementById("intro");
  const app = document.getElementById("app");
  const neon = document.getElementById("neon-overlay");

  // Trigger neon sweep
  neon.classList.add("active");

  // Fade out intro
  intro.classList.add("fade-out");

  setTimeout(() => {
    intro.style.display = "none";
    app.classList.remove("hidden");
    app.classList.add("show");
  }, 700); // sync with neon animation
}
