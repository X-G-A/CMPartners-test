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

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".category-btn");
    const projectCards = document.querySelectorAll(".project-card");
    const mainImage = document.getElementById("mainProjectImg");

    // Save whatever image is initially in the HTML
    const defaultImage = mainImage.src;

    // Show all projects on page load
    projectCards.forEach(card => {
        card.classList.remove("hidden");
        card.classList.add("show");
    });

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const category = button.dataset.category;
            const wasActive = button.classList.contains("active");

            // Remove active state from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));

            // If clicked button was already active,
            // reset everything to default
            if (wasActive) {

                projectCards.forEach(card => {
                    card.classList.remove("hidden");
                    card.classList.add("show");
                });

                mainImage.style.opacity = "0";

                setTimeout(() => {
                    mainImage.src = defaultImage;
                    mainImage.style.opacity = "1";
                }, 200);

                return;
            }

            // Activate clicked button
            button.classList.add("active");

            // Change center image
            if (projectsData[category]) {

                mainImage.style.opacity = "0";

                setTimeout(() => {
                    mainImage.src = projectsData[category].img;
                    mainImage.style.opacity = "1";
                }, 200);
            }

            // Filter project cards
            projectCards.forEach(card => {

                if (card.dataset.category === category) {
                    card.classList.remove("hidden");
                    card.classList.add("show");
                } else {
                    card.classList.remove("show");
                    card.classList.add("hidden");
                }

            });

        });

    });

});