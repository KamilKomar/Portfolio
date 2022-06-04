const navMobileMenuBtn = document.querySelector('.nav__mobile-menu')
const navMobileCloseBtn = document.querySelector('.nav__mobile-close')
console.log(navMobileCloseBtn)
const nav = document.querySelector('.nav')

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();


navMobileMenuBtn.addEventListener('click', () => {
    nav.style.display = 'block';
})
// })
navMobileCloseBtn.addEventListener('click', () => {
    nav.style.display = 'none';

})


timeline
    .to(".mountain1", 3, { y: -200 })
    .to(".mountain2", 3, { y: -500 }, "-=3")
    .fromTo(".bg", 3, { y: -50 }, { y: 0, duration: 3 }, "-=3")
    .to(".welcome", 3, { top: "0%" }, "-=3");
    // .fromTo(".welcome", { opacity: 0 }, { opacity: 1, duration: 3 });
    // .fromTo(".welcome__text", { opacity: 0 }, { opacity: 1 });

let scene = new ScrollMagic.Scene({
    triggerElement: "header",
    duration: "150%",
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin("welcome")
    .addTo(controller);
