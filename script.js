function enterSite() {
  const intro = document.getElementById("intro");
  const app = document.getElementById("app");
  const streaks = document.getElementById("streaks");

  // Netflix-style streak animation
  streaks.classList.add("active");

  // Zoom effect
  document.body.classList.add("zoom");

  // Fade intro
  intro.classList.add("fade-out");

  // Show main page
  setTimeout(() => {
    intro.style.display = "none";
    app.classList.remove("hidden");
    app.classList.add("show");
  }, 650);
}
