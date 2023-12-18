const header = document.getElementById("header");
const first = document.getElementById("first-img");
const secound = document.getElementById("second-img");
const third = document.getElementById("third-img");

document.addEventListener("DOMContentLoaded", () => {
  first.style.opacity = 1;
  setTimeout(() => {
    secound.style.opacity = 1;
  }, 200);
  setTimeout(() => {
    third.style.opacity = 1;
  }, 400);
});

window.addEventListener("scroll", (event) => {
  if (window.scrollY > 800) {
    header.style.position = "fixed";
    header.style.bottom = "calc(100% - 100px)";
  } else {
    header.style.position = "absolute";
    header.style.bottom = 0;
  }
  if (window.scrollY > 200) {
    document.querySelector(".menu-bar").style.bottom = "calc(0% - 245px)";
  } else {
    document.querySelector(".menu-bar").style.bottom = "100%";
  }
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  header.classList.toggle("menu-open");
  if (window.scrollY > 200) {
    document.querySelector(".menu-bar").style.bottom = "calc(0% - 245px)";
  } else {
    document.querySelector(".menu-bar").style.bottom = "100%";
  }
});

document.querySelector(".open-info").addEventListener("click", () => {
  header.classList.toggle("menu-open");
  document.querySelector("body").classList.toggle("open-card");
});

document.querySelector(".info-close").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("open-card");
});
