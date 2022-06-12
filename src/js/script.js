const navMobileMenuBtn = document.querySelector(".nav__mobile-menu");
const navMobileCloseBtn = document.querySelector(".nav__mobile-close");
const navMenuLink = document.querySelectorAll(".nav__menu-item");
const nav = document.querySelector(".nav");
const techName = document.querySelectorAll('.technologies__name')
const technologyDesc = document.querySelector('.technologies__desc')

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();


// PARALLAX EFFECT
timeline
    .to(".mountain1", 3, { y: -200 })
    .to(".mountain2", 3, { y: -500 }, "-=3")
    .fromTo(".bg", 3, { y: -50 }, { y: 0, duration: 3 }, "-=3")
    .to(".welcome", 3, { top: "0%" }, "-=3");

let scene = new ScrollMagic.Scene({
    triggerElement: "header",
    duration: "150%",
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin("welcome")
    .addTo(controller);

// MOBILE MENU
navMobileMenuBtn.addEventListener("click", () => {
    nav.style.display = "block";
});

navMobileCloseBtn.addEventListener("click", () => {
    nav.style.display = "none";
});
// navMenuLink.forEach((link) => {
//     link.addEventListener("click", () => {
//         nav.style.display = "none";
//     });
// });

//ACCORDION

techName.forEach( (name) => {

    name.addEventListener('click',(e) => {

        const arrow = name.lastElementChild
        arrow.classList.toggle('technologies__arrow-rotate')
        const techDesc = e.target.closest('div')
        const desc = techDesc.nextElementSibling
        desc.classList.toggle('technologies__desc-active')



    })

})



// NAV SCROLL
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > 1) {
        nav.style.backgroundColor = "rgba(0,0,0, .1)";
        nav.style.backdropFilter = `blur(${10}px)`;
    } else {
        nav.style.backdropFilter = `blur(${0}px)`;
        nav.style.background = "transparent";
    }
})
