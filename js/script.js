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
    searchInput.classList.toggle("active");
})

const list = document.querySelector(".news-list");
const listItem = list.querySelectorAll("li");
listItem.forEach(element => {
    element.onclick = e => {
        for (let i = 0; i < listItem.length; i++) {
            const element = listItem[i];
            element.classList.remove("active");
        }
        e.target.classList.add("active")
    }
});


// for (let i = 0; i < list.length; i++) {
//     const element = list[i];
//     console.log(element);
//     element.classList.remove("active")
//     element.addEventListener("click", e => {
//         e.target.classList.add("active")
//     })
// }
// console.log(list);