// Select the elements from the DOM
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbarOverlay = document.querySelector('.navbar-overlay');
const menuClose = document.getElementById('menu-close');

// Function to toggle the navbar overlay
const toggleNavbar = () => {
    // Check if the overlay is currently displayed
    const isOverlayDisplayed = navbarOverlay.style.display === 'flex';
    
    if (isOverlayDisplayed) {
        // Hide the overlay and show the hamburger menu button
        navbarOverlay.style.display = 'none';
        hamburgerMenu.style.display = 'block';
        document.body.style.overflow = 'auto'; // Enable body scrolling
        menuClose.style.display = 'none';
    } else {
        // Show the overlay and hide the hamburger menu button
        navbarOverlay.style.display = 'flex';
        hamburgerMenu.style.display = 'none';
        document.body.style.overflow = 'hidden'; // Disable body scrolling
        menuClose.style.display = 'block';
    }
};

// Ensure that the overlay is set correctly on page load for larger screens
const checkScreenSize = () => {
    if (window.innerWidth >= 768) {
        navbarOverlay.style.display = 'flex'; // Show sidebar on larger screens
        hamburgerMenu.style.display = 'none';
        menuClose.style.display = 'none';
    } else {
        navbarOverlay.style.display = 'none'; // Hide sidebar on mobile
        hamburgerMenu.style.display = 'block';
    }


};


// Attach resize event listener
window.addEventListener('resize', checkScreenSize);

// Run on initial load
checkScreenSize();

// Event listeners for the hamburger menu and close button
hamburgerMenu.addEventListener('click', toggleNavbar);
menuClose.addEventListener('click', toggleNavbar);