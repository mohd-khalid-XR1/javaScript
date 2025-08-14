const slides = Array.from(document.querySelectorAll("#slider-container div"))
const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")
console.log(slides);

let activeSlideIndex = 0;
const sliderLength = slides.length

function renderSlides() {
    slides.forEach((slide, index) => {
        if (activeSlideIndex === index) {
            slide.setAttribute("class", "active")
        } else {
            slide.setAttribute("class", "")
        }
    })
}

renderSlides()

nextBtn.addEventListener("click", nextSlideFunc)


function nextSlideFunc(e) {
    if (activeSlideIndex === sliderLength - 1) {
        activeSlideIndex = 0
    }
    activeSlideIndex++
    // console.log(activeSlideIndex);
    renderSlides()
}