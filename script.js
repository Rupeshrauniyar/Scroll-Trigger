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





let tl1 = gsap.timeline({
scrollTrigger : {
trigger:'.page1',
scroller:".main",
start:'top 120vh',
end:'top 0',
scrub:2,
}
})
let tl2 = gsap.timeline({
scrollTrigger : {
trigger:'.page1-content',
scroller:".main",
start:'top 300vh',
end:'top 0',
scrub:2,
}
})
tl1.to('.page1 video',{
width:"60vh",
},"same")
tl2.to('.page1-content h1 ',{
fontSize:"7vh",
y:-60,
},"same")
tl2.to('.page1 h2 ',{
fontSize:"10vh",
rotate:"12deg",
},"same")
tl2.to('.page1 h3 ',{
fontSize:"8vh",
rotate:"-12deg",
},"same")
