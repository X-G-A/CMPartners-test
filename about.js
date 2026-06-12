const historyData = [
    {
        year: "2008",
        desc: "C&M Partners was founded with a vision to deliver quality design and build services.",
        img: "slider_img_1.jpg"
    },
    {
        year: "2012",
        desc: "Expanded into commercial construction projects across Metro Manila.",
        img: "slider_img_2.jpg"
    },
    {
        year: "2016",
        desc: "Introduced modern design-build systems and project management upgrades.",
        img: "slider_img_3.jpg"
    },
    {
        year: "2022",
        desc: "Recognized for excellence in residential and large-scale developments.",
        img: "slider_img_4.jpg"
    }
];

let current = 0;

const yearEl = document.getElementById("historyYear");
const descEl = document.getElementById("historyDesc");
const imgEl = document.getElementById("historyImg");

const prevBtn = document.getElementById("prevHistory");
const nextBtn = document.getElementById("nextHistory");

function updateHistory(direction = "next") {

    // fade out
    imgEl.classList.add("history-fade");

    setTimeout(() => {

        yearEl.textContent = historyData[current].year;
        descEl.textContent = historyData[current].desc;
        imgEl.src = historyData[current].img;

        // fade in
        imgEl.classList.remove("history-fade");

    }, 300);
}

prevBtn.addEventListener("click", () => {
    current = (current - 1 + historyData.length) % historyData.length;
    updateHistory("prev");
});

nextBtn.addEventListener("click", () => {
    current = (current + 1) % historyData.length;
    updateHistory("next");
});

/* ========================================
   MISSION / VISION / RECOGNITIONS
======================================== */

const mvData = {
    mission: {
        image: "mission.png",
        text: "To provide high-quality design and build services through integrity, innovation, and commitment to excellence."
    },

    vision: {
        image: "vision.png",
        text: "To become one of the most trusted construction and design-build companies, creating structures that stand the test of time."
    },

    recognitions: {
        image: "slider_img_3.jpg",
        text: "Recognized for quality workmanship, client satisfaction, and delivering projects with professionalism and reliability."
    }
};

const mvButtons = document.querySelectorAll(".mv-btn");
const mvImage = document.getElementById("mvImage");
const mvText = document.getElementById("mvText");

mvButtons.forEach(button => {
    button.addEventListener("click", () => {
        const tab = button.dataset.tab;
        // active state
        mvButtons.forEach(btn =>
            btn.classList.remove("active")
        );
        button.classList.add("active");
        // fade out
        mvImage.style.opacity = "0";
        mvText.style.opacity = "0";
        setTimeout(() => {
            mvImage.src = mvData[tab].image;
            mvText.textContent = mvData[tab].text;
            // fade back in
            mvImage.style.opacity = "1";
            mvText.style.opacity = "1";
        }, 300);
    });
});