/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 100,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text, .blogs__container', {}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, .blogs__img', {delay: 100}); 
sr.reveal('.home__social-icon', {interval: 100}); 
sr.reveal('.skills__data, .work__img', {interval: 100}); 
sr.reveal('.research__img-container, .research__content', {interval: 100}); 



/*===== Separate Scroll Reveal for Blogs List =====*/
const blogContainer = document.querySelector('.blogs__container');

if (blogContainer) {
  sr.reveal('.blogs__container .blog', {
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 100,
    interval: 100,
  });
}

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const hoverables = document.querySelectorAll('a');

hoverables.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
  });
});