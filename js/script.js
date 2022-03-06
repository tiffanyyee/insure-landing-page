// Hamburger menu - toggle nav display and icon

const icon = document.getElementById("icon");
const nav = document.getElementById("nav-links");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

icon.addEventListener("click", function() {
  if (nav.style.display === "block") {
    nav.style.display = "none";
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    nav.style.display = "block";
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
});