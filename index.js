let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let slideTitle = document.getElementById('slideTitle');
let slideDesc = document.getElementById('slideDesc');
let quoteBtn = document.getElementById('quoteBtn');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
    active = 0;
    }
    else{
    active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active - 1 < 0){
    active = lengthItems;
    }
    else{
    active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    slideTitle.textContent = slideContent[active].title;
    slideDesc.textContent = slideContent[active].desc;

    if(active === 4){
    quoteBtn.classList.add("show");
    }
    else{
    quoteBtn.classList.remove("show");
    }

    document.querySelector('.slider-text').classList.remove('fade-text');
    void document.querySelector('.slider-text').offsetWidth;
    document.querySelector('.slider-text').classList.add('fade-text');

    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 5000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', function(){
    active = key;
    reloadSlider();
    })
})

const navbar = document.querySelector('.navbar');
const heroScroll = document.getElementById('heroScroll');

window.addEventListener('scroll', () => {
    const sliderHeight = heroScroll.offsetHeight;
    if(window.scrollY > 80){
    navbar.classList.add('scrolled');
    }
    else{
    navbar.classList.remove('scrolled');
    }
}); 

const slideContent = [
{
    title: "C&M PARTNERS",
    desc: "Dream, Design, Develop"
},
{
    title: "DREAM",
    desc: "Turn your dream home into reality."
},
{
    title: "DESIGN",
    desc: "Design your ideas."
},
{
    title: "DEVELOP",
    desc: "Develop your perspective."
},
{
    title: "A New Foundation",
    desc: "What you build today, will shape tomorrow."
}
];

