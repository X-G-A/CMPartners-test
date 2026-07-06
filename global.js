

function createBackToTopButton() {
    const button = document.createElement('button');
    button.classList.add('back-to-top');
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', createBackToTopButton);

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {

                const delay = index * 0.05;
                entry.target.style.animationDelay = `${delay}s`;
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
    initScrollAnimations();
}

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

let slider = null;

const isMobile = () => window.innerWidth <= 768;
const TRANSITION_TIME = isMobile() ? 600 : 800;
const LOAD_TIME = 1000;

function getOrCreateSlider() {
    if (!slider) {
        slider = document.createElement('div');
        slider.classList.add('page-slider');

        const logo = document.createElement('img');
        logo.src = 'logo.png';
        logo.alt = 'C&M Partners';
        logo.classList.add('slider-logo');
        slider.appendChild(logo);

        document.body.appendChild(slider);
    }
    return slider;
}

document.addEventListener('DOMContentLoaded', () => {
    const s = getOrCreateSlider();

    s.classList.add('active');

    setTimeout(() => {
        s.classList.remove('active');
        s.classList.add('exit');
    }, LOAD_TIME);
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href]');

    navLinks.forEach(link => {

        if (!link.hasAttribute('target') && !link.getAttribute('href').startsWith('http') && !link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                const s = getOrCreateSlider();

                s.classList.remove('exit');
                s.classList.add('active');

                setTimeout(() => {
                    window.location.href = href;
                }, TRANSITION_TIME);
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navRight = document.getElementById("navRight");

    if (menuToggle && navRight) {

        menuToggle.addEventListener("click", () => {

            navRight.classList.toggle("show");

            if (navRight.classList.contains("show")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navRight.classList.remove("show");
                menuToggle.innerHTML = "☰";

            });

        });

        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {
                navRight.classList.remove("show");
                menuToggle.innerHTML = "☰";
            }

        });

    }

});