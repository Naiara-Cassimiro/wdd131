const produtos = [
  { id: "fc-1888", nome: "Capacitor de Fluxo", classificacaoMedia: 4.5 },
  { id: "fc-2050", nome: "Fios Elétricos", classificacaoMedia: 4.7 },
  { id: "fs-1987", nome: "Circuitos de Tempo", classificacaoMedia: 3.5 },
  { id: "ac-2000", nome: "Reator de Baixa Tensão", classificacaoMedia: 3.9 },
  { id: "jj-1969", nome: "Equalizador de Distorção", classificacaoMedia: 5.0 }
];

function preencherProdutos() {
  const seletorProduto = document.querySelector("#produto");

  if (!seletorProduto) {
    return;
  }

  produtos.forEach((produto) => {
    const opcao = document.createElement("option");
    opcao.value = produto.id;
    opcao.textContent = produto.nome;
    seletorProduto.appendChild(opcao);
  });
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

preencherProdutos();
atualizarRodape();
