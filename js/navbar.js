// This is for toggling the mobile navbar

// Getting the navbar elements
const toggleButton = document.getElementById('toggleButton');
const navLinks = document.getElementById('navLinks');

// Toggling the mobile dropdown menu on/off and animating the hamburger menu onclick
toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  toggleButton.classList.toggle('open');
});
