// Dynamic Navigation Highlight
window.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split("/").pop(); // Get the current file name
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active'); // Add 'active' class to the current page link
        }
    });
});

// Image Slideshow for Gallery
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll(".slideshow img");
    slides.forEach((slide, index) => {
        slide.style.display = "none"; // Hide all images
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Loop back to the first slide
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current image
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Start slideshow when gallery page is loaded
window.addEventListener('load', () => {
    if (window.location.pathname.includes("gallery.html")) {
        showSlides();
    }
});