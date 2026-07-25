/* ==========================================
   WDD 131 - S04 Álbum de Templos Filtrados
   Arquivo: templos-filtrados.js
========================================== */


// ==========================================
// Ano Atual
// ==========================================

const currentYear = document.querySelector("#currentyear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ==========================================
// Última Modificação com Data e Hora
// ==========================================

const lastModified = document.querySelector("#lastmodified");

if (lastModified) {

    const dateModified = new Date(document.lastModified);

    lastModified.textContent =
        `${dateModified.toLocaleDateString("pt-BR")} ${dateModified.toLocaleTimeString("pt-BR")}`;

}


// ==========================================
// Menu Hambúrguer
// ==========================================

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        if (navigation.classList.contains("open")) {

            menuButton.textContent = "✖";
            menuButton.setAttribute("aria-label", "Fechar menu");

        } else {

            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Abrir menu");

        }

    });

}


// ==========================================
// Array de Objetos dos Templos
// ==========================================

// ==========================================
// Array de Objetos dos Templos
// ==========================================

const templos = [

    {
        nomeDoTemplo: "Aba Nigéria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        nomeDoTemplo: "Cidade do México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, Brasil",
    consagracao: "30 de outubro de 1978",
    area: 59246,
    urlDaImagem: "imagens/templo-sao-paulo.webp"
},
{
    nomeDoTemplo: "Recife Brasil",
    localizacao: "Recife, Pernambuco, Brasil",
    consagracao: "15 de dezembro de 2000",
    area: 37200,
    urlDaImagem: "imagens/templo-recife.webp"
},
{
    nomeDoTemplo: "Curitiba Brasil",
    localizacao: "Curitiba, Paraná, Brasil",
    consagracao: "1 de junho de 2008",
    area: 27850,
    urlDaImagem: "imagens/templo-curitiba.webp"
}

];

// ==========================================
// Seleciona a Galeria
// ==========================================

const galeria = document.querySelector(".gallery");

// ==========================================
// Exibir Templos
// ==========================================

function exibirTemplos(listaDeTemplos) {

    galeria.innerHTML = "";

    listaDeTemplos.forEach((templo) => {

        const card = document.createElement("section");
card.classList.add("card-templo");

        const titulo = document.createElement("h2");
titulo.classList.add("titulo-templo");

        const localizacao = document.createElement("p");

        const consagracao = document.createElement("p");

        const area = document.createElement("p");

        const imagem = document.createElement("img");
imagem.classList.add("imagem-templo");

        titulo.textContent = templo.nomeDoTemplo;

        localizacao.innerHTML =
            `<strong>Localização:</strong> ${templo.localizacao}`;

        consagracao.innerHTML =
            `<strong>Consagração:</strong> ${templo.consagracao}`;

        area.innerHTML =
            `<strong>Área:</strong> ${templo.area.toLocaleString()} pés²`;

        imagem.src = templo.urlDaImagem;

        imagem.alt = templo.nomeDoTemplo;

        imagem.loading = "lazy";

        imagem.width = 400;

        imagem.height = 250;

        card.appendChild(titulo);

        card.appendChild(localizacao);

        card.appendChild(consagracao);

        card.appendChild(area);

        card.appendChild(imagem);

        galeria.appendChild(card);

    }
);

}

// ==========================================
// Exibe Todos os Templos
// ==========================================

exibirTemplos(templos);

// ==========================================
// Botões do Menu
// ==========================================

const botaoInicio = document.querySelector("#inicio");
const botaoAntigos = document.querySelector("#antigos");
const botaoNovos = document.querySelector("#novos");
const botaoGrandes = document.querySelector("#grandes");
const botaoPequenos = document.querySelector("#pequenos");

// ==========================================
// Filtro - Início
// ==========================================

botaoInicio.addEventListener("click", (event) => {

    event.preventDefault();

    exibirTemplos(templos);

});

// ==========================================
// Filtro - Antigos
// Templos consagrados antes de 1900
// ==========================================

botaoAntigos.addEventListener("click", (event) => {

    event.preventDefault();

    const templosAntigos = templos.filter((templo) => {

        const anoConsagracao = parseInt(templo.consagracao);

        return anoConsagracao < 1900;

    });

    exibirTemplos(templosAntigos);

});

// ==========================================
// Filtro - Novos
// Templos consagrados após 2000
// ==========================================

botaoNovos.addEventListener("click", (event) => {

    event.preventDefault();

    const templosNovos = templos.filter((templo) => {

        const anoConsagracao = parseInt(templo.consagracao);

        return anoConsagracao > 2000;

    });

    exibirTemplos(templosNovos);

});

// ==========================================
// Filtro - Grandes
// Templos com área maior que 90.000 pés²
// ==========================================

botaoGrandes.addEventListener("click", (event) => {

    event.preventDefault();

    const templosGrandes = templos.filter((templo) => {

        return templo.area > 90000;

    });

    exibirTemplos(templosGrandes);

});

// ==========================================
// Filtro - Pequenos
// Templos com área menor que 10.000 pés²
// ==========================================

botaoPequenos.addEventListener("click", (event) => {

    event.preventDefault();

    const templosPequenos = templos.filter((templo) => {

        return templo.area < 10000;

    });

    exibirTemplos(templosPequenos);

});