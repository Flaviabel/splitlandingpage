let left = document.querySelector(".left");
let right = document.querySelector(".right");
let container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("expandir-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("expandir-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("expandir-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("expandir-right");
});