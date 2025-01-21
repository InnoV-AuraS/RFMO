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




document.body.style.backgroundImage = 'url("https://vscode.dev/github/InnoV-AuraS/RFMO/blob/Home_Page/SVGs/backgroung.jpg")';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';




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



