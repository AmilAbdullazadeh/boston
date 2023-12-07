var slides = document.querySelectorAll(".slide")
var nextBtn = document.querySelector(".btn-next")
var prevBtn = document.querySelector(".btn-prev")

var currentIndex = 0;
var maxNumber = slides.length - 1;

nextBtn.addEventListener("click", function () {
    if (currentIndex === maxNumber) {
        currentIndex = 0
    } else {
        currentIndex ++
    }
    
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });

})

prevBtn.addEventListener("click", () => {
    if (currentIndex === 0) {
        currentIndex = maxNumber
    } else {
        currentIndex --
    }

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
})