let currentIndex = 0;
const slideInterval = 20000; // 20 seconds for auto slide
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slides .slide").length; // Count the slide divs
const totalGroups = Math.ceil(totalSlides / 6); // Calculate total groups of 6 images
let autoSlideInterval;

function updateSlidePosition() {
  const offset = -currentIndex * (100 / totalGroups); // Calculate the offset for sliding (show 6 images at a time)
  slides.style.transform = `translateX(${offset}%)`; // Move slides
  updateDots(); // Update dots to reflect the current slide
}

function goToSlide(index) {
  currentIndex = index;
  updateSlidePosition(); // Update the position of the slides
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalGroups; // Go to next group
  updateSlidePosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalGroups) % totalGroups; // Go to previous group
  updateSlidePosition();
}

function autoSlide() {
  nextSlide(); // Move to the next slide automatically
}

function createDots() {
  const dotsContainer = document.getElementById('dotsContainer');
  for (let i = 0; i < totalGroups; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
  updateDots(); // Initialize dots
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active")); // Remove active class from all
  dots[currentIndex].classList.add("active"); // Set active class to the current dot
}

document.addEventListener("DOMContentLoaded", () => {
  createDots(); // Create dots on load
  updateSlidePosition(); // Initialize slide position
  autoSlideInterval = setInterval(autoSlide, slideInterval); // Start auto sliding

  // Pause auto slide on mouse over and resume on mouse out
  document.querySelector(".slider").addEventListener("mouseover", () => clearInterval(autoSlideInterval));
  document.querySelector(".slider").addEventListener("mouseout", () => {
    autoSlideInterval = setInterval(autoSlide, slideInterval);
  });
});