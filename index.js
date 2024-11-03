let currentIndex = 0;
const totalSlides = 20; // Total number of slides
const slidesToShow = 4; // Number of slides to show at a time

function changeSlide(direction) {
    currentIndex += direction * slidesToShow;

    // Looping back to the start or end
    if (currentIndex < 0) {
        currentIndex = totalSlides - slidesToShow; // Move to last group
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Move to first group
    }

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${(currentIndex / totalSlides) * 100}%)`;
}