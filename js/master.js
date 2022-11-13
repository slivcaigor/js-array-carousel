// Array of slider images
const slider = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];

let currentIndex = 0;

// Big image slide section
const bigSlide = document.querySelector(".ms_bigSlide");
for (let i = 0; i < slider.length; i++) {
  const slideSrc = slider[i];

  let activeClass = "";

  if (i === currentIndex) {
    activeClass = "active";
  }
  let tagActiveImage = `<img class="${activeClass}" src="${slideSrc}">`;
  bigSlide.innerHTML += tagActiveImage;
}



// Next slide arrow
const next = document.querySelector(".ms_next");
next.addEventListener("click", function () {

  const activeSlide = document.querySelector(".active");
  activeSlide.classList.remove('active');

  currentIndex++;
  if (currentIndex > slider.length - 1) {
    currentIndex = 0;
  }
  const imageTag = bigSlide.querySelectorAll("img");
  const newActiveSlide = imageTag[currentIndex];
  newActiveSlide.classList.add('active');
});


// Prev slide arrow
const prev = document.querySelector(".ms_prev");
prev.addEventListener("click", function () {
  const activeSlide = document.querySelector(".active");
  activeSlide.classList.remove('active');

  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slider.length - 1;
  }
  const imageTag = bigSlide.querySelectorAll("img");
  const newActiveSlide = imageTag[currentIndex];
  newActiveSlide.classList.add('active');
});


