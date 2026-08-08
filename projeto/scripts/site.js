const botaoMenu = document.querySelector("#botao-menu");
const menuPrincipal = document.querySelector("#menu-principal");
const anoAtual = document.querySelector("#ano-atual");
const ultimaModificacao = document.querySelector("#ultima-modificacao");

function alternarMenu() {
  const menuAberto = menuPrincipal.classList.toggle("aberta");

  botaoMenu.setAttribute("aria-expanded", menuAberto);

  if (menuAberto) {
    botaoMenu.setAttribute("aria-label", "Fechar menu de navegação");
  } else {
    botaoMenu.setAttribute("aria-label", "Abrir menu de navegação");
  }
}

function atualizarRodape() {
  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

  if (ultimaModificacao) {
    ultimaModificacao.textContent =
      `Última modificação: ${document.lastModified}`;
  }
}

if (botaoMenu && menuPrincipal) {
  botaoMenu.addEventListener("click", alternarMenu);
}

atualizarRodape();