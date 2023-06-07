import sidebar from "./sidebar.js";
let side = document.getElementById("sidebar");
side.innerHTML = sidebar();

import navbar from "./navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

import footer from "./footer.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();

function openNav() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}

document.getElementById("sd").addEventListener("click", () => {
  openNav();
});

document.getElementById("clo").addEventListener("click", () => {
  closeNav();
});
