// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => {
  appearOnScroll.observe(el);
});

// Responsive navigation toggle
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuBtn.classList.toggle('open');
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
