const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
const totalSlides = slideImages.length;

let index = 0;

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function showSlide(i) {
  if (i >= totalSlides) index = 0;
  else if (i < 0) index = totalSlides - 1;
  else index = i;
  slides.style.transform = `translateX(-${index * 100}vw)`;
}

nextBtn.addEventListener("click", () => showSlide(index + 1));
prevBtn.addEventListener("click", () => showSlide(index - 1));

setInterval(() => {
  showSlide(index + 1);
}, 6000);
