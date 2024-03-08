gsap.from("#img1",{
    opacity:0,
    duration:1,
    delay:0.4,
    y:60
})

gsap.from("#img2",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:40
})
gsap.from("#img3",{
    opacity:0,
    duration:1,
    delay:0.4,
    y:-60
})
gsap.from(".main>h1",{
    opacity:0,
    duration:1,
    delay:0.8

})
gsap.from(".page2 h5 , .page2 h1 , .about-us",{
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:".page2 h5",
        scroller:"body",
        start:"top 60%",
    }
})
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });