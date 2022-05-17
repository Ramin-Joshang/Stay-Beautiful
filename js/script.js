// Doctors slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var swiper = new Swiper(".my", {
    slidesPerView: 3,
    grid: {
        rows: 2
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});