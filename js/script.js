// JavaScript for Interactive Effects on Mid-July Website

// Function to apply animations on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add('visible');
        }
    });
});

// Particle effects using particles.js (assumed to be included in the project)
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// Smooth transitions for links
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
