const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
/* No Change */
function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()
/* No Change */



let tl1 = gsap.timeline({
scrollTrigger : {
trigger:'.page1',
scroller:".main",
start:'top 70vh',
end:'top 50vh',
scrub:2,
duration:"0.5s",
delay:0,
}
},"same")
tl1.to('.page1 h1',{
x:"-5vh",
},"same")
tl1.to('.page1 h2',{
x:"5vh",
},"same")
tl1.to('.page1 video',{
width:"60vh",
})




let tl2 = gsap.timeline({
scrollTrigger : {
trigger:'.page2',
scroller:".main",
start:'top 450vh',
end:'top 450vh',
scrub:2,
duration:"0.5s",
delay:0,

}
})

tl2.from('.page2 h2',{
rotate:"6deg",
y:50,
})


tl2.to('.page2 h2',{
rotate:0,
opacity:2,
y:"5vh",
})
tl2.to('.page2 h1',{
x:"26vh",
opacity:1,
})
var swiper = new Swiper(".mySwiper", {
spaceBetween: 30,
centeredSlides: true,
autoplay: {
delay: 3000,
disableOnInteraction: false,
},
pagination: {
el: ".swiper-pagination",
clickable: true,
},
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
});
    
    
let tl3 = gsap.timeline({
scrollTrigger : {
trigger:'.page3',
scroller:".main",
start:'top 550vh',
end:'top 550vh',
scrub:2,
duration:"0.5s",
delay:0,
}
})
tl3.to('.page3',{
opacity:2,
rotate:-10,
y:-120,
backgroundColor:"#fff",
})
