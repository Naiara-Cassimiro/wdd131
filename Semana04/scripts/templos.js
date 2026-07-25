/* ==========================================
   WDD 131 - S02 Álbum de Templos
   Arquivo: templos.js
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

            menuButton.setAttribute(
                "aria-label",
                "Fechar menu"
            );


        } else {


            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Abrir menu"
            );


        }


    });


}