const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;
let timer;

function showSlide(n) {
  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = n;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active-dot");
  }

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active-dot");

  clearTimeout(timer);
  timer = setTimeout(nextSlide, 30000);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    showSlide(i);
  });
}

showSlide(currentSlide);
