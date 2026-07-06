
const projectsData = {
    residential: {
        img: "slider_img_2.jpg",
        name: "Residential Projects"
    },
    commercial: {
        img: "slider_img_1.jpg",
        name: "Commercial Projects"
    },
    modular: {
        img: "slider_img_3.jpg",
        name: "Modular Projects"
    },
    institutional: {
        img: "slider_img_4.jpg",
        name: "Institutional Projects"
    },
    fitout: {
        img: "slider_img_5.jpg",
        name: "Fit Out Projects"
    },
    renovation: {
        img: "slider_img_1.jpg",
        name: "Renovation Projects"
    }
};

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".category-btn");
    const projectLinks = document.querySelectorAll(".project-link");
    const mainImage = document.getElementById("mainProjectImg");
    const sortSelect = document.getElementById("sortProjects");

    const defaultImage = mainImage.src;

    projectLinks.forEach(link => {
        link.style.display = "block";
    });

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const category = button.dataset.category;
            const wasActive = button.classList.contains("active");

            buttons.forEach(btn => btn.classList.remove("active"));

            if (wasActive) {

                projectLinks.forEach(link => {
                    link.style.display = "block";
                });

                mainImage.style.opacity = "0";

                setTimeout(() => {
                    mainImage.src = defaultImage;
                    mainImage.style.opacity = "1";
                }, 200);

                return;
            }

            button.classList.add("active");

            if (projectsData[category]) {

                mainImage.style.opacity = "0";

                setTimeout(() => {
                    mainImage.src = projectsData[category].img;
                    mainImage.style.opacity = "1";
                }, 200);

            }

            projectLinks.forEach(link => {

                const categories = link.dataset.category
                    .split(",")
                    .map(cat => cat.trim());

                if (categories.includes(category)) {
                    link.style.display = "block";
                } else {
                    link.style.display = "none";
                }

            });

        });

    });

    if (sortSelect) {

        sortSelect.addEventListener("change", () => {

            const grid = document.querySelector(".projects-grid-4col");
            const cards = [...grid.querySelectorAll(".project-link")];

            switch (sortSelect.value) {

                case "newest":
                    cards.sort((a, b) =>
                        new Date(b.dataset.date) - new Date(a.dataset.date)
                    );
                    break;

                case "oldest":
                    cards.sort((a, b) =>
                        new Date(a.dataset.date) - new Date(b.dataset.date)
                    );
                    break;

                case "az":
                    cards.sort((a, b) =>
                        a.dataset.name.localeCompare(b.dataset.name)
                    );
                    break;

                case "za":
                    cards.sort((a, b) =>
                        b.dataset.name.localeCompare(a.dataset.name)
                    );
                    break;

            }

            cards.forEach(card => grid.appendChild(card));

        });

    }

});