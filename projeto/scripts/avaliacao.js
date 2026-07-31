function obterContador() {
  return parseInt(localStorage.getItem('contadorAvaliacoes')) || 0;
}

function definirContador(valor) {
  localStorage.setItem('contadorAvaliacoes', valor);
}

let contador = obterContador();
contador += 1;
definirContador(contador);

document.querySelector('#contador-avaliacoes').textContent = contador;