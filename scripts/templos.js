/* ==========================================
   WDD 131 - S02 Álbum de Templos
   Arquivo: templos.js
========================================== */

// ==============================
// Ano Atual
// ==============================

const currentYear = document.querySelector("#currentyear");

currentYear.textContent = new Date().getFullYear();


// ==============================
// Última Modificação
// ==============================

const lastModified = document.querySelector("#lastmodified");

lastModified.textContent = document.lastModified;


// ==============================
// Menu Hambúrguer
// ==============================

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const header = document.querySelector("header");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");
    header.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
        menuButton.setAttribute("aria-label", "Fechar menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Abrir menu");
    }

});