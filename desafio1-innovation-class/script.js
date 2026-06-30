
let swiper = new Swiper(".mySwiper1", {
    slidesPerView: 5,
    slidesPerGroup: 3,

    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {

       
        480: {
            slidesPerView: 2,

        },
     
        768: {
            slidesPerView: 4,

        },
        1024: {
            slidesPerView: 5,
        }


    }
});

let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    slidesPerGroup: 3,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {

        // when window width is >= 480px
        480: {
            slidesPerView: 2,

        },
        
        768: {
            slidesPerView: 4,

        },
        1024:{
            slidesPerView: 5,
        }


    }
});


//drop menu
const dropMenu = document.getElementById("drop-menu")
const dropConteiner = document.getElementById("drop-menu-container")
const dropOver = document.getElementById("drop-menu-over")
const dropCategoria = document.querySelectorAll(".cadegoria")
const menuCategoria = document.getElementById("category-menu")


// mobileHtml

const mobileInstitucional = document.getElementById("mobile-institucional")
const mobileCentral = document.getElementById("mobile-central")
const mobileAtendimento = document.getElementById('mobile-atendimento')

const arrowInstitucional = document.getElementById("arrow-institucional")
const arrowCentral = document.getElementById("arrow-central")
const arrowAtendimento = document.getElementById("arrow-atendimento")

function handleSerch(e) {
    e.preventDefault()
    const search = document.getElementById("search")
    const searchResponse = document.getElementById("searchResponse")

    searchResponse.style.display = "flex"

    searchResponse.innerHTML = `<p>Você buscou por: '${search.value}'</p>`

    search.value = ""

}

function handleRgister(e){
    e.preventDefault()
}

dropMenu.addEventListener("mouseenter", () => {
    dropConteiner.style.display = "flex"
})
dropCategoria.forEach(element => {
    element.addEventListener("mouseenter", () => {
        menuCategoria.style.display = "flex";
    });


    element.addEventListener("mouseleave", (e) => {

        if (!menuCategoria.contains(e.relatedTarget)) {
            menuCategoria.style.display = "none";
        }
    });
});
menuCategoria.addEventListener("mouseleave", (e) => {

    let voltoCategoria = false;
    dropCategoria.forEach(element => {
        if (element.contains(e.relatedTarget)) voltoCategoria = true;
    });

    if (!voltoCategoria) {
        menuCategoria.style.display = "none";
    }
});
dropConteiner.addEventListener("mouseleave", (e) => {

    if (!dropMenu.contains(e.relatedTarget)) {
        dropConteiner.style.display = "none";
        menuCategoria.style.display = "none";
    }
});

//footer mobile
function esconderConteinerMobile() {
    mobileAtendimento.style.display = "none"
    mobileInstitucional.style.display = "none"
    mobileCentral.style.display = "none"
    arrowAtendimento.classList.remove('rotacionado')
    arrowCentral.classList.remove('rotacionado')
    arrowInstitucional.classList.remove('rotacionado')

}
const displeyarrowFooter = (div, arrow) => {

    const display = window.getComputedStyle(div);



    if (div.style.display === "flex") {
        esconderConteinerMobile()
        return
    }
    esconderConteinerMobile()
    div.style.display = "flex"
    arrow.classList.toggle('rotacionado')


}
arrowAtendimento.addEventListener("click", () => {
    displeyarrowFooter(mobileAtendimento, arrowAtendimento)

})

arrowCentral.addEventListener("click", () => {

    displeyarrowFooter(mobileCentral, arrowCentral)
})
arrowInstitucional.addEventListener("click", () => {

    displeyarrowFooter(mobileInstitucional, arrowInstitucional)


})

