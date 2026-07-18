const historyData = [
    {
        year: "2008",
        desc: "CM Partners was founded by Ediver Correa and Andreanne Molano, with a vision to deliver quality design and build services.",
        img: ""
    },
    {
        year: "2014",
        desc: "Expanded with integrity through connections that remain present today.",
        img: "History_2012_img.jpg"
    },
    {
        year: "2022",
        desc: "Continued to build upon the foundation of our team, and the foundation of the future.",
        img: "History_2022_img.jpg"
    },
    {
        year: "2026",
        desc: "Recognized for excellence from modular construction to large-scale development.",
        img: "ZM_residential/ZM_residence_exterior.jpg"
    },
];

let current = 0;

const yearEl = document.getElementById("historyYear");
const descEl = document.getElementById("historyDesc");
const imgEl = document.getElementById("historyImg");

const prevBtn = document.getElementById("prevHistory");
const nextBtn = document.getElementById("nextHistory");

function updateHistory(direction = "next") {

    imgEl.classList.add("history-fade");

    setTimeout(() => {

        yearEl.textContent = historyData[current].year;
        descEl.textContent = historyData[current].desc;
        imgEl.src = historyData[current].img;

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
        image: "recognition.png",
        text: "15+ Years Experience <br> Trusted by clients"
    }
};

const mvButtons = document.querySelectorAll(".mv-btn");
const mvImage = document.getElementById("mvImage");
const mvText = document.getElementById("mvText");

mvButtons.forEach(button => {
    button.addEventListener("click", () => {
        const tab = button.dataset.tab;

        mvButtons.forEach(btn =>
            btn.classList.remove("active")
        );
        button.classList.add("active");

        mvImage.style.opacity = "0";
        mvText.style.opacity = "0";
        setTimeout(() => {
            mvImage.src = mvData[tab].image;
            mvText.innerHTML = mvData[tab].text;

            mvImage.style.opacity = "1";
            mvText.style.opacity = "1";
        }, 300);
    });
});