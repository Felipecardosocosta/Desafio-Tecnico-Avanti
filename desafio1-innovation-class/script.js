
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 3,
    spaceBetween: 2,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
});

function alo(e) {
    e.preventDefault()
    alert("alou")
}