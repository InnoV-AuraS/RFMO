const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { // Adjust pixel threshold
    header.classList.remove('transparent');
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    header.classList.add('transparent');
  }
});

// Get references to elements
const hamburger = document.querySelector('.hamburger img'); // Hamburger icon
const leftMenu = document.querySelector('.left-menu'); // Dashboard menu
const closeButton = document.querySelector('.close img'); // Close button

// Function to show the menu
function showMenu() {
    leftMenu.style.transform = 'translateX(0)'; // Slide the menu into view
}

// Function to hide the menu
function hideMenu() {
    leftMenu.style.transform = 'translateX(-100%)'; // Slide the menu out of view
}

// Add event listeners
hamburger.addEventListener('click', showMenu); // Show menu on hamburger click
closeButton.addEventListener('click', hideMenu); // Hide menu on close button click



//Background Of Website
const images = [
    "SVGs/background.jpg",
];

let currentIndex = 0;

const imageContainer = document.querySelector('.image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Function to update the background image
function updateBackgroundImage() {
    imageContainer.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Event listeners for arrows
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back
    updateBackgroundImage();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop forward
    updateBackgroundImage();
});

// Auto-change background every 5 seconds (optional)
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackgroundImage();
}, 5000);

// Initialize the first image
updateBackgroundImage();

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    var logo = document.querySelector(".logo");
    header.classList.toggle("sticky", window.scrollY > 20);
  });

//Support Page Faqs
document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq h3');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const content = faq.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});



