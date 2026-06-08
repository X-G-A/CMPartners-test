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