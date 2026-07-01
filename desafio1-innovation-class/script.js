
const dataProdutos = [
    { id: 1, tag: 'Novo', nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", preco: 100.00, precoComDesconto: 79.90, porcentagemDesconto: 10, parcela: "10x de R$ 7,90", img: "./assets/Images/homem-mock.png" },
    { id: 2, tag: 'Novo', nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", preco: 100.00, precoComDesconto: 79.90, porcentagemDesconto: 10, parcela: "10x de R$ 7,90", img: "./assets/Images/homem-mock.png" },
    { id: 3, tag: 'Novo', nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", preco: 100.00, precoComDesconto: 79.90, porcentagemDesconto: 10, parcela: "10x de R$ 7,90", img: "./assets/Images/homem-mock.png" },
    { id: 4, tag: 'Novo', nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", preco: 100.00, precoComDesconto: 79.90, porcentagemDesconto: 10, parcela: "10x de R$ 7,90", img: "./assets/Images/homem-mock.png" },
    { id: 5, tag: 'Novo', nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", preco: 100.00, precoComDesconto: 79.90, porcentagemDesconto: 10, parcela: "10x de R$ 7,90", img: "./assets/Images/homem-mock.png" },
    { id: 6, tag: 'Novo', nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", preco: 100.00, precoComDesconto: 79.90, porcentagemDesconto: 10, parcela: "10x de R$ 7,90", img: "./assets/Images/homem-mock.png" },
    { id: 7, tag: 'Novo', nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", preco: 100.00, precoComDesconto: 79.90, porcentagemDesconto: 10, parcela: "10x de R$ 7,90", img: "./assets/Images/homem-mock.png" },
    { id: 8, tag: 'Novo', nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", preco: 100.00, precoComDesconto: 79.90, porcentagemDesconto: 10, parcela: "10x de R$ 7,90", img: "./assets/Images/homem-mock.png" },
    { id: 9, tag: 'Novo', nome: "Lorem Impsum dolor sit amet consectetuer adipiscing elit", preco: 100.00, precoComDesconto: 79.90, porcentagemDesconto: 10, parcela: "10x de R$ 7,90", img: "./assets/Images/homem-mock.png" },
]

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

const widthMobile = 768

const isMobile = () => window.innerWidth < widthMobile;


function cardProduto(produto) {

    return `
      <div id='meu2Card${produto.id}' class="swiper-slide">
                            <div
                                class="w-43.5 h-91  md:w-59.5 md:h-103 flex flex-col border border-gray-400 shadow-gray-600 rounded-md p-2">
                                <span
                                    class='w-10 ${!produto.tag && 'hidden'}  md:w-1/4 bg-[#00264E] text-white text-[10px] text-center font-regular px-1.5 py-0.5 rounded-sm z-10 '>
                                    ${produto.tag}
                                </span>

                                <img src="${produto.img}" class="w-55" alt="">
                         
                                <div class="text-left text-[14px]  text-[#303030]">
                                    <h3>${produto.nome}</h3>

                                    <div class="flex items-center gap-3">
                                        <div>
                                            <p class="line-through text-gray-500 text-[12px]">R$${produto.preco}</p>
                                            <p class="font-bold text-[16px]">R$${produto.precoComDesconto}</p>

                                        </div>

                                        <div class="bg-[#5EC0BE] rounded-lg py-0.5 px-1.5 cursor-pointer text-[11px]">
                                            <a class="text-white underline ">${produto.porcentagemDesconto}% <span class="font-bold">OFF</span></a>

                                        </div>

                                    </div>


                                    <div>
                                        <p class="text-[#303030] text-[12px]">ou em ate <span ${produto.parcela}</span>
                                        </p>
                                    </div>

                                </div>
                                <button
                                    class="bg-[#005cff] mt-2 hover:bg-[#004cd2] text-white font-bold text-[14px] px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
                                    Comprar
                                </button>


                            </div>


                        </div>
    
    
    `


}

function start() {
    const conteinerCarrossel = document.getElementById("conteiner-carrossel")


    const conteinerCarrossel2 = document.getElementById("conteiner-carrossel2")
    
    

    dataProdutos.map(produto => {

        conteinerCarrossel.innerHTML += cardProduto(produto)

    })

    
    
    


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
    })

    menuCategoria2.addEventListener("mouseleave", () => {

        menuCategoria2.style.display = "none";
    })

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
    })
    menuCategoria.addEventListener("mouseleave", (e) => {

        let voltoCategoria = false;
        optionDepartamento.forEach(element => {
            if (element.contains(e.relatedTarget)) voltoCategoria = true;
        });

        if (!voltoCategoria) {
            menuCategoria.style.display = "none";
        }
    })
    dropConteiner.addEventListener("mouseleave", (e) => {

        if (!dropMenu.contains(e.relatedTarget)) {
            dropConteiner.style.display = "none";
            menuCategoria.style.display = "none";
        }
    })
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

}

function openOptionMobile() {

    navBar.classList.toggle("menuMobileOpen")
    navBar.classList.add("left-0", "w-full")


}
function closeOptionMobile() {

    navBar.classList.toggle("menuMobileClose")
    navBar.classList.remove("left-0", "w-full")


}


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



start()
