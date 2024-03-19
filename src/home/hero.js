
// Slide show setup
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 12000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});