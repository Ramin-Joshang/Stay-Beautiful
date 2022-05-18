//  slider

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

var swiper = new Swiper(".Swiper", {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 30,
    slidesPerColumnFill: 'column',
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
})

const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");
searchBtn.addEventListener('click', () => {
    console.log(searchInput);
    searchInput.classList.toggle("active");
})