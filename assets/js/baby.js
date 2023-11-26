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
