const menuBar = document.getElementById("menu-bar");
const nav = document.getElementById("nav");
const menuBg = document.getElementById("menu-bg");

function toggle(element, className) {
  // debugger
  element.classList.toggle(className);
}

menuBar.addEventListener("click", toggle(menuBar, "change"));
nav.addEventListener("click", toggle(nav, "change"));
menuBg.addEventListener("click", toggle(menuBg, "change-bg"));

//if > else > (class += className), (classList.add, classList.remove)
