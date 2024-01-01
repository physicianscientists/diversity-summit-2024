// This is for toggling the mobile navbar

// Getting the navbar elements
const toggleButton = document.getElementById('toggleButton');
const navLinks = document.getElementById('navLinks');
const socialMedias = document.getElementById('socialMediaList');
const lastNavLink = document.getElementById('lastLink');
let checkActive = false;

// Toggling the mobile dropdown menu on/off and animating the hamburger menu onclick
toggleButton.addEventListener('click', () => {
  if (!checkActive) {
    navLinks.classList.add('active');
    socialMedias.classList.add('active');
    toggleButton.classList.add('open');
    lastNavLink.innerHTML = socialMedias.innerHTML;
    checkActive = true;
  } else {
    navLinks.classList.remove('active');
    socialMedias.classList.remove('active');
    toggleButton.classList.remove('open');
    lastNavLink.innerHTML = '';
    checkActive = false;
  }
})


//toggleButton.addEventListener('click', () => {
//  navLinks.classList.toggle('active');
//  socialMedias.classList.toggle('active');
//  lastNavLink.innerHTML = socialMedias.innerHTML;
//  toggleButton.classList.toggle('open');
//});
