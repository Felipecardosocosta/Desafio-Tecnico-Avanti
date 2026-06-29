const dataProdutos = [
    {id:1, tag:'Novo', nome:"", preco:100.00,precoComDesconto:79.90,porcentagemDesconto:10 , parcela:"10x de R$ 7,90",img:"./assets/Images/homem-mock.png"},
    {id:2, tag:'Novo', nome:"", preco:100.00,precoComDesconto:79.90,porcentagemDesconto:10 , parcela:"10x de R$ 7,90",img:"./assets/Images/homem-mock.png"},
    {id:3, tag:'Novo', nome:"", preco:100.00,precoComDesconto:79.90,porcentagemDesconto:10 , parcela:"10x de R$ 7,90",img:"./assets/Images/homem-mock.png"},
    {id:4, tag:'', nome:"", preco:100.00,precoComDesconto:79.90,porcentagemDesconto:10 , parcela:"10x de R$ 7,90",img:"./assets/Images/homem-mock.png"},
    {id:5, tag:'', nome:"", preco:100.00,precoComDesconto:79.90,porcentagemDesconto:10 , parcela:"10x de R$ 7,90",img:"./assets/Images/homem-mock.png"},
    {id:6, tag:'', nome:"", preco:100.00,precoComDesconto:79.90,porcentagemDesconto:10 , parcela:"10x de R$ 7,90",img:"./assets/Images/homem-mock.png"},
    {id:7, tag:'', nome:"", preco:100.00,precoComDesconto:79.90,porcentagemDesconto:10 , parcela:"10x de R$ 7,90",img:"./assets/Images/homem-mock.png"},
    {id:8, tag:'', nome:"", preco:100.00,precoComDesconto:79.90,porcentagemDesconto:10 , parcela:"10x de R$ 7,90",img:"./assets/Images/homem-mock.png"},
    {id:9, tag:'', nome:"", preco:100.00,precoComDesconto:79.90,porcentagemDesconto:10 , parcela:"10x de R$ 7,90",img:"./assets/Images/homem-mock.png"},
]

function estruturaCard(produto) {


    return `
    <div id='meuCard${produto.id}' class="swiper-slide w-60 h-102 ">
                        <div
                            class="card w-11/12 h-full flex flex-col border border-gray-400 shadow-gray-600 rounded-md p-2">
                            ${produto.tag? `
                                <span
                                class=" w-1/4 bg-[#00264E] text-white md:text-[10px] text-center font-regular px-1.5 py-0.5 rounded-sm z-10 ">
                                ${produto.tag}
                            </span>
                                
                                `:`
                            <span
                                class=" w-1/4 bg-white text-white md:text-[10px] text-center font-regular px-1.5 py-0.5 rounded-sm z-10 ">
                                ''
                            </span>
                                
                                `}

                            <img src="./assets/Images/homem-mock.png" class="w-55" alt="">
                            <!-- 
                            <div class="bg-[url(./assets/Images/homem-mock.png)] bg-cover bg-center h-65 ">
                            </div> -->
                            <div class="text-left text-[14px]  text-[#303030]">
                                <h3>Lorem Impsum dolor sit amet consectetuer adipiscing elit</h3>

                                <div class="flex items-center gap-3">
                                    <div>
                                        <p class="line-through text-gray-500 text-[12px]">R$100.00</p>
                                        <p class="font-bold text-[16px]">R$79.90</p>

                                    </div>

                                    <div class="bg-[#5EC0BE] rounded-lg py-0.5 px-1.5 cursor-pointer text-[11px]">
                                        <a class="text-white underline ">10% <span class="font-bold">OFF</span></a>

                                    </div>

                                </div>


                                <div>
                                    <p class="text-[#303030] text-[12px]">ou em ate <span class="font-semibold">10x de
                                            R$7,90</span>
                                    </p>
                                </div>

                            </div>
                            <button
                                class="bg-[#005cff] mt-2 hover:bg-[#004cd2] text-white font-bold text-[14px] px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
                                Comprar
                            </button>


                        </div>

    
    `
    
}



let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
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



const isMobile = () => window.innerWidth < 1024
const isDesktop = () => window.innerWidth > 1024



//footer mobile
function esconderConteinerMobile() {
    mobileAtendimento.style.display = "none"
    mobileInstitucional.style.display = "none"
    mobileCentral.style.display = "none"
    arrowAtendimento.classList.remove('rotacionado')
    arrowCentral.classList.remove('rotacionado')
    arrowInstitucional.classList.remove('rotacionado')

}
const displeyarrowFooter = (div,arrow)=>{

    const display=window.getComputedStyle(div);
    
    

    if (div.style.display ==="flex") {
        esconderConteinerMobile()
        return
    }
    esconderConteinerMobile()
    div.style.display = "flex"
    arrow.classList.toggle('rotacionado')


}
arrowAtendimento.addEventListener("click",()=>{
    displeyarrowFooter(mobileAtendimento,arrowAtendimento)

})

arrowCentral.addEventListener("click",()=>{
    
   displeyarrowFooter(mobileCentral,arrowCentral)
})
arrowInstitucional.addEventListener("click",()=>{
    
    displeyarrowFooter(mobileInstitucional,arrowInstitucional)
    

})

