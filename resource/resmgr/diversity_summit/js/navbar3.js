// This is for toggling the mobile navbar

// Getting the navbar elements
const toggleButton = document.getElementById('toggleButton');
const navLinks = document.getElementById('navLinks');
const socialMedias = document.getElementById('socialMediaList');
const lastNavLink = document.getElementById('lastLink');
let checkActive = false;

// Function to close the navbar
function closeNavbar() {
  navLinks.classList.remove('active');
  socialMedias.classList.remove('active');
  toggleButton.classList.remove('open');
  lastNavLink.innerHTML = '';
  checkActive = false;
}

// Toggling the mobile dropdown menu on/off and animating the hamburger menu onclick
toggleButton.addEventListener('click', () => {
  if (!checkActive) {
    navLinks.classList.add('active');
    socialMedias.classList.add('active');
    toggleButton.classList.add('open');
    lastNavLink.innerHTML = socialMedias.innerHTML;
    checkActive = true;
  } else {
    closeNavbar();
  }
})

// Closes the navbar when clicking outside of it
document.addEventListener('click', (event) => {
  if (!event.target.closest('#navLinks') && !event.target.closest('#toggleButton')) {
    closeNavbar();
  }
});

// Adds click event listeners to all buttons inside the navbar
document.querySelectorAll('#navLinks li').forEach(li => {
  li.addEventListener('click', () => {
    closeNavbar();
  });
});

// Removes the lastNav when the screen is resized back to full screen to avoid resizing issues.
window.addEventListener('resize', e => {
  if (window.matchMedia(`(min-width: 1024px)`).matches) {
    lastNavLink.innerHTML = '';
  }
});



//toggleButton.addEventListener('click', () => {
//  navLinks.classList.toggle('active');
//  socialMedias.classList.toggle('active');
//  lastNavLink.innerHTML = socialMedias.innerHTML;
//  toggleButton.classList.toggle('open');
//});
