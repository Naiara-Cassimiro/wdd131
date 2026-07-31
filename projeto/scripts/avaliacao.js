function obterContador() {
  return Number(localStorage.getItem("contadorAvaliacoes")) || 0;
}

function salvarContador(valor) {
  localStorage.setItem("contadorAvaliacoes", valor);
}

function atualizarRodape() {
  const anoAtual = document.querySelector("#ano-atual");
  const ultimaModificacao = document.querySelector("#ultima-modificacao");

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

  if (ultimaModificacao) {
    ultimaModificacao.textContent =
      `Última modificação: ${document.lastModified}`;
  }
}

let contador = obterContador();
contador++;

salvarContador(contador);

document.querySelector("#contador-avaliacoes").textContent = contador;

atualizarRodape();