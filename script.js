// Function to toggle the navbar menu
function toggleMenu() {
    var menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('show');
}

// Event listener for the navbar toggle button
document.querySelector('.navbar-toggle').addEventListener('click', toggleMenu);
