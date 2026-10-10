const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const service = link.getAttribute('data-service');
    const message = `Hi Oluwaseyi, I'm interested in discussing ${service}.`;
    const contactButton = document.querySelector('.contact-actions .button-light');
    if (contactButton) {
      contactButton.href = `https://wa.me/2348120960219?text=${encodeURIComponent(message)}`;
    }
  });
});
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
