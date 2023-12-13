const menuBar = document.getElementById("menu-bar");
const nav = document.getElementById("nav");
const menuBg = document.getElementById("menu-bg");

function toggle(element, className) {
  element.classList.toggle(className);
}

menuBar.addEventListener("click", () => {
  toggle(menuBar, "change");
  toggle(nav, "change");
  toggle(menuBg, "change-bg");
})