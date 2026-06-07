// ===== Design 2: Playful & Vibrant — Script =====

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Scroll Animations
    observeAnimations();

    // Service card hover sound effect (wiggle)
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) rotate(1deg)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Contact Form Handler
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Yay! Message sent! 🎉💕 We\'ll reply as soon as we can!');
        form.reset();
    });
});

// Intersection Observer for scroll animations
function observeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    });

    document.querySelectorAll('.slide-up, .bounce-in').forEach(el => {
        observer.observe(el);
    });
}
