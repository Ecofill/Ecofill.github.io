const hamburger = document.getElementById('hamburger');
const sideNav = document.getElementById('side-nav');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  sideNav.classList.add('active');
  sideNav.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
});

closeBtn.addEventListener('click', () => {
  sideNav.classList.remove('active');
  sideNav.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
});

// Optional: close nav when clicking a link inside side nav
document.querySelectorAll('.side-link').forEach(link => {
  link.addEventListener('click', () => {
    sideNav.classList.remove('active');
    sideNav.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});
