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
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 4,
        },
        1536: {
            slidesPerView: 5,
        }


    }
});


//drop menu
const dropMenu = document.getElementById("drop-menu")
const dropConteiner = document.getElementById("drop-menu-container")
const dropOver = document.getElementById("drop-menu-over")
const optionDepartamento = document.querySelectorAll(".cadegoria")
const menuCategoria = document.getElementById("category-menu")
const menuCategoria2 = document.getElementById("category-menu2")
const optionDepartamento2 = document.querySelectorAll('.option-departamento')

// mobileHtml

const mobileInstitucional = document.getElementById("mobile-institucional")
const mobileCentral = document.getElementById("mobile-central")
const mobileAtendimento = document.getElementById('mobile-atendimento')

const arrowInstitucional = document.getElementById("arrow-institucional")
const arrowCentral = document.getElementById("arrow-central")
const arrowAtendimento = document.getElementById("arrow-atendimento")


const menuArrowMobile = document.querySelectorAll(".mobile-arrow")

const navBar = document.getElementById("nav-bar")

function openOptionMobile(){

    navBar.classList.toggle("menuMobileOpen")
    navBar.classList.add("left-0","w-full")
    
    
}
function closeOptionMobile() {

    navBar.classList.toggle("menuMobileClose")
  navBar.classList.remove("left-0","w-full")

    
}

const widthMobile = 768

const isMobile = () => window.innerWidth < widthMobile;
function handleSerch(e) {
    e.preventDefault()

    let idInput = 'search'

    if (isMobile()) {

        idInput = "search-mobile"

    }

    const search = document.getElementById(idInput)
    const searchResponse = document.getElementById("searchResponse")



    searchResponse.style.display = "flex"

    searchResponse.innerHTML = `<p>Você buscou por: '${search.value}'</p>`

    search.value = ""

}

function handleRgister(e) {
    e.preventDefault()
}

optionDepartamento2.forEach(element => {
    
    
    element.addEventListener("mouseenter", () => {
        menuCategoria2.style.display = "flex";
    });


    element.addEventListener("mouseleave", (e) => {
        console.log(!menuCategoria2.contains(e.relatedTarget));
        
        if (!menuCategoria2.contains(e.relatedTarget)) {
            menuCategoria.style.display = "none";
        }
    });
});

menuCategoria2.addEventListener("mouseleave",()=>{

    menuCategoria2.style.display = "none";
    });

dropMenu.addEventListener("mouseenter", () => {
    dropConteiner.style.display = "flex"
})
optionDepartamento.forEach(element => {
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
    optionDepartamento.forEach(element => {
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


    menuArrowMobile?.forEach((element, i) => {
        const divOption = document.getElementById(`mobile-cadegoria-${i}`)
        const arrow = element.querySelector("img")

        arrow?.classList.remove("rotacionado")
        divOption.style.display = "none"

    })
}
const displayArrow = (div, arrow) => {

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
    displayArrow(mobileAtendimento, arrowAtendimento)

})

arrowCentral.addEventListener("click", () => {

    displayArrow(mobileCentral, arrowCentral)
})
arrowInstitucional.addEventListener("click", () => {

    displayArrow(mobileInstitucional, arrowInstitucional)


})

menuArrowMobile?.forEach((element, i) => {


    const divOption = document.getElementById(`mobile-cadegoria-${i}`)


    element.addEventListener("click", () => {

        const arrow = element.querySelector('img')

        displayArrow(divOption, arrow)


    })

})





