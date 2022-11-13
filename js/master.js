// Array of slider images
const slider = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];

let currentIndex = 0;

// Big image slide section
let bigSlide = document.querySelector(".ms_bigSlide");
for (let i = 0; i < slider.length; i++) {
  let slideSrc = slider[i];

  let activeClass = "";

  if (i === currentIndex) {
    activeClass = "active";
  }
  let tagActiveImage = `<img class="${activeClass}" src="${slideSrc}">`;
  bigSlide.innerHTML += tagActiveImage;
}



// Next slide arrow
let next = document.querySelector(".ms_next");
next.addEventListener("click", function () {

  let activeSlide = document.querySelector(".active");
  activeSlide.classList.remove('active');

  currentIndex++;
  if (currentIndex > slider.length - 1) {
    currentIndex = 0;
  }

  let imageTag = bigSlide.querySelectorAll("img");
  let newActiveSlide = imageTag[currentIndex];
  newActiveSlide.classList.add('active');

  if (currentIndex === slider.length - 1) {
    next.classList.add('hidden');
  }

  if (currentIndex !== slider.length - 1) {
    prev.classList.remove('hidden');
  }
});


// Prev slide arrow
let prev = document.querySelector(".ms_prev");
prev.addEventListener("click", function () {
  let activeSlide = document.querySelector(".active");
  activeSlide.classList.remove('active');

  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slider.length - 1;
  }
  let imageTag = bigSlide.querySelectorAll("img");
  let newActiveSlide = imageTag[currentIndex];
  newActiveSlide.classList.add('active');

  if (currentIndex !== slider.length - 1) {
    next.classList.remove('hidden');
  }

  if (currentIndex == slider.length - 1) {
    prev.classList.add('hidden');
  }
});


