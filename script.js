const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

const darkMode = document.querySelector('#darkmode');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
  document.body.setAttribute('data-theme', 'dark');
  darkMode.classList.replace('bx-moon', 'bx-sun');
}

darkMode.addEventListener('click', () => {
  if (darkMode.classList.contains('bx-moon')) {
    darkMode.classList.replace('bx-moon', 'bx-sun');
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    darkMode.classList.replace('bx-sun', 'bx-moon');
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const typed = new Typed('.typing', {
  strings: ['Web Developer', 'Student'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const subject = contactForm.querySelector('input[type="text"]:nth-child(2)').value;
  const message = contactForm.querySelector('textarea').value;

  console.log({ name, email, subject, message });
  
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

const skillBars = document.querySelectorAll('.skill-bar');
const skillsSection = document.querySelector('.skills');

function animateSkillBars() {
  skillBars.forEach(bar => {
    const level = bar.querySelector('.skill-level');
    const width = level.style.width;
    level.style.width = '0';
    
    setTimeout(() => {
      level.style.width = width;
    }, 100);
  });
}

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkillBars();
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillsObserver.observe(skillsSection);