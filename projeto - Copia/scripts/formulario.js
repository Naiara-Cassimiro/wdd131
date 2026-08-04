const produtos = [
  {
    id: "enigma-logico",
    nome: "Enigma Lógico"
  },
  {
    id: "charada-misteriosa",
    nome: "Charada Misteriosa"
  },
  {
    id: "desafio-de-cifras",
    nome: "Desafio de Cifras"
  },
  {
    id: "quebra-cabeca-visual",
    nome: "Quebra-Cabeça Visual"
  },
  {
    id: "desafio-semanal",
    nome: "Desafio Semanal"
  }
];

const produtoSelecionado = document.querySelector("#produto");
const anoAtual = document.querySelector("#ano-atual");
const ultimaModificacao = document.querySelector("#ultima-modificacao");

if (produtoSelecionado) {
  produtos.forEach((produto) => {
    const option = document.createElement("option");

    option.value = produto.id;
    option.textContent = produto.nome;

    produtoSelecionado.appendChild(option);
  });
}

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

if (ultimaModificacao) {
  ultimaModificacao.textContent =
    `Última modificação: ${document.lastModified}`;
}