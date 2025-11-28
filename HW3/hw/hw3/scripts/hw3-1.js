// Part 1 - Dark Mode and Font JS 

const themeBtn = document.getElementById("toggle-theme");
const fontBtn = document.getElementById("toggle-font");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

fontBtn.addEventListener("click", function () {
  document.body.classList.toggle("alt-font");
});
