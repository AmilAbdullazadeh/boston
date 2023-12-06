var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
var openBtn = document.querySelector(".btn-open");
var closeBtn = document.querySelector(".btn-close");

function openModal() {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

function closeModal() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

