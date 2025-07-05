// Smooth scroll for navigation
document.querySelectorAll('nav ul li a, .scroll-links a').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('section').forEach(sec => observer.observe(sec));

// Contact form handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
});

// =================== ENHANCEMENTS ===================

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || (!stored && prefersDark)) {
    document.documentElement.classList.add('dark');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
  }
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    themeToggle.querySelector('i').classList.toggle('fa-moon', !isDark);
    themeToggle.querySelector('i').classList.toggle('fa-sun', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-xmark');
  });
  navLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// Scroll progress bar
const progressBar = document.getElementById('progress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });
}
