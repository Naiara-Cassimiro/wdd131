function obterContador() {
  return Number(localStorage.getItem("contadorAvaliacoes")) || 0;
}

function salvarContador(valor) {
  localStorage.setItem("contadorAvaliacoes", `${valor}`);
}

function atualizarContador() {
  const contadorAvaliacoes = document.querySelector(
    "#contador-avaliacoes"
  );

  if (!contadorAvaliacoes) {
    return;
  }

  const novoTotal = obterContador() + 1;

  salvarContador(novoTotal);

  contadorAvaliacoes.textContent =
  novoTotal === 1
    ? `${novoTotal} avaliação`
    : `${novoTotal} avaliações`;
}

atualizarContador();