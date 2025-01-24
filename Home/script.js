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






// Array of lines to display in the slider
const lines = [
    "ANNOUNCEMENTS - JIS EDUCATION INITIATIVES",
    "JIS GROUP OF EDUCATION AND INITIATIVES",
    "WELCOME TO JIS EDUCATION"
];

let Index = 0; // Tracks the current line index
const textElement = document.getElementById("slider-text");

// Function to show the next text line
function showText() {
    // Fade out the current text
    textElement.style.opacity = "0";

    // Wait for the fade-out transition (1 second)
    setTimeout(() => {
        // Update the text content
        textElement.textContent = lines[Index];

        // Fade in the new text
        textElement.style.opacity = "1";

        // Move to the next line (loop back to the first line if at the end)
        Index = (Index + 1) % lines.length;
    }, 1000); // Matches the CSS transition duration
}

// Start the slider with an interval
setInterval(showText, 5000); // Change text every 3 seconds

// Initialize the first text immediately
showText();






//Background Of Website
const images = [

    "SVGs/background.png"
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


let lastKnownScrollY = 0;
let ticking = false;

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const navBar = document.querySelector(".nav-elements"); // Adjust selector for your nav bar
  const navBarHeight = navBar.offsetHeight; // Get nav bar height
  const currentScrollY = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (currentScrollY > navBarHeight + 100) { // Scrolling down beyond nav bar height
        if (currentScrollY < lastKnownScrollY) {
          // User is scrolling up
          header.classList.add("sticky");
        } else {
          // User is scrolling down
          header.classList.remove("sticky");
        }
      } else {
        // Near the top of the page
        header.classList.remove("sticky");
      }

      lastKnownScrollY = currentScrollY; // Update the last known scroll position
      ticking = false;
    });
    ticking = true;
  }
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





const clickSound = new Audio('Sounds/sound.wav');
clickSound.volume = 0.5; 

document.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });

clickSound.addEventListener('ended', () => {
    // Sound completed
  });