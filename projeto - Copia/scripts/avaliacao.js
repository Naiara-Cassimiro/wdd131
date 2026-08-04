function obterContador() {
  return Number(localStorage.getItem("contadorAvaliacoes")) || 0;
}

function salvarContador(valor) {
  localStorage.setItem("contadorAvaliacoes", String(valor));
}

function atualizarRodape() {
  const anoAtual = document.querySelector("#ano-atual");
  const ultimaModificacao = document.querySelector("#ultima-modificacao");

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

  if (ultimaModificacao) {
    ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;
  }
}

const contadorAvaliacoes = document.querySelector("#contador-avaliacoes");
const novoTotal = obterContador() + 1;

salvarContador(novoTotal);

if (contadorAvaliacoes) {
  contadorAvaliacoes.textContent = novoTotal;
}

atualizarRodape();
