const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;
const totalSlides = carousel.children.length;
const intervalTime = 5000; // Auto-slide every 3 seconds
let slideInterval;

// Function to move to the next slide
const nextSlide = () => {
    if (index < totalSlides - 1) {
        index++;
    } else {
        index = 0; // Loop back to the first slide
    }
    updateSlidePosition();
};

// Function to move to the previous slide
const prevSlide = () => {
    if (index > 0) {
        index--;
    } else {
        index = totalSlides - 1; // Loop back to the last slide
    }
    updateSlidePosition();
};

// Function to update slide position
const updateSlidePosition = () => {
    carousel.style.transform = `translateX(-${index * 100}%)`;
};

// Function to start auto-sliding
const startSlideTimer = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
};

// Function to reset timer when user interacts
const resetSlideTimer = () => {
    clearInterval(slideInterval);
    startSlideTimer();
};

// Event listeners
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetSlideTimer();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetSlideTimer();
});

// Start auto-slide when page loads
startSlideTimer();
document.addEventListener("DOMContentLoaded", function () {
    const roles = ["Web Developer", "Aspiring IT Professional", "Data Analyst"];
    let index = 0;
    const roleElement = document.getElementById("changing-role");

    function changeRole() {
        roleElement.style.opacity = 0; // Fade out

        setTimeout(() => {
            index = (index + 1) % roles.length; // Move to the next role
            roleElement.textContent = roles[index]; // Change text
            roleElement.style.opacity = 1; // Fade in
        }, 500); // Wait for fade-out before changing text
    }

        // Start the first transition after an initial delay
        setTimeout(() => {
            setInterval(changeRole, 2000); // Run every 2 seconds
        }, 1000); // Give the first text time before starting the cycle
});


