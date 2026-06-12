/* ==================================================
   BACK TO TOP BUTTON
================================================== */

// Create back to top button
function createBackToTopButton() {
    const button = document.createElement('button');
    button.classList.add('back-to-top');
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(button);

    // Show/hide button based on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });

    // Smooth scroll to top
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);

/* ==================================================
   SCROLL ANIMATIONS
================================================== */

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay to prevent flashy multi-element animations
                const delay = index * 0.05;
                entry.target.style.animationDelay = `${delay}s`;
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Auto-apply animations to common elements
    const elementsToAnimate = [
        '.section',
        '.section-title',
        '.about-container',
        '.about-content',
        '.team-section',
        '.team-members',
        '.service-card',
        '.project-card',
        '.member',
        '.history-slider',
        '.mv-section',
        '.title-container'
    ];

    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            observer.observe(el);
        });
    });
}

// Initialize scroll animations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
    initScrollAnimations();
}

/* ==================================================
   GLOBAL NAVBAR SCROLL EFFECT
================================================== */

const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ==================================================
   PAGE TRANSITION SLIDER EFFECT
================================================== */

// Global slider instance
let slider = null;

// Detect if mobile
const isMobile = () => window.innerWidth <= 768;
const TRANSITION_TIME = isMobile() ? 600 : 800;
const LOAD_TIME = 1000;

function getOrCreateSlider() {
    if (!slider) {
        slider = document.createElement('div');
        slider.classList.add('page-slider');
        
        // Add logo to slider
        const logo = document.createElement('img');
        logo.src = 'logo.png';
        logo.alt = 'C&M Partners';
        logo.classList.add('slider-logo');
        slider.appendChild(logo);
        
        document.body.appendChild(slider);
    }
    return slider;
}

// Initialize slider when page loads
document.addEventListener('DOMContentLoaded', () => {
    const s = getOrCreateSlider();
    
    // Slider slides in from left
    s.classList.add('active');
    
    // After 1 second, slide out to left
    setTimeout(() => {
        s.classList.remove('active');
        s.classList.add('exit');
    }, LOAD_TIME);
});

// Handle navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Skip external links, current page, and anchor links
        if (!link.hasAttribute('target') && !link.getAttribute('href').startsWith('http') && !link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                const s = getOrCreateSlider();
                
                // Slide in from left to cover page
                s.classList.remove('exit');
                s.classList.add('active');
                
                // Navigate after slider covers page
                setTimeout(() => {
                    window.location.href = href;
                }, TRANSITION_TIME);
            });
        }
    });
});