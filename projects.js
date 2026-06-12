/* Projects Data */
const projectsData = {
    residential: {
        img: "slider_img_1.jpg",
        name: "Residential Projects"
    },
    commercial: {
        img: "slider_img_2.jpg",
        name: "Commercial Projects"
    },
    mixed: {
        img: "slider_img_3.jpg",
        name: "Mixed-Use Projects"
    },
    institutional: {
        img: "slider_img_4.jpg",
        name: "Institutional Projects"
    },
    industrial: {
        img: "slider_img_5.jpg",
        name: "Industrial Projects"
    },
    renovation: {
        img: "slider_img_1.jpg",
        name: "Renovation Projects"
    }
};

// Initialize category buttons and filtering
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const mainImage = document.getElementById('mainProjectImg');

    // Set all cards to show by default
    projectCards.forEach(card => card.classList.add('show'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            // Toggle behavior: if already active, show all projects
            if (button.classList.contains('active')) {
                button.classList.remove('active');
                projectCards.forEach(card => {
                    card.classList.remove('hidden');
                    card.classList.add('show');
                });
            } else {
                // Activate this button and filter
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Update main image
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.src = projectsData[category].img;
                    mainImage.style.opacity = '1';
                }, 200);

                // Filter projects
                projectCards.forEach(card => {
                    if (card.dataset.category === category) {
                        card.classList.remove('hidden');
                        card.classList.add('show');
                    } else {
                        card.classList.remove('show');
                        card.classList.add('hidden');
                    }
                });
            }
        });
    });
});
