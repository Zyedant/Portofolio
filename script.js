const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
header.classList.toggle("sticky", window.scrollY > 0);
});

const darkmode = document.getElementById("darkmode");

darkmode.addEventListener("click", () => {
document.body.classList.toggle("active");
});