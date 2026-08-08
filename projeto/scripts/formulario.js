const desafios = [
  {
    id: "o-buraco",
    nome: "O Buraco"
  },
  {
    id: "tres-interruptores",
    nome: "Os Três Interruptores"
  },
  {
    id: "mensagem-secreta",
    nome: "Mensagem Secreta"
  },
  {
    id: "a-familia",
    nome: "A Família"
  },
  {
    id: "o-que-tem-cidades",
    nome: "O que tem cidades?"
  },
  {
    id: "observe-a-sequencia",
    nome: "Observe a Sequência"
  }
];

const desafioSelecionado = document.querySelector("#produto");
const anoAtual = document.querySelector("#ano-atual");
const ultimaModificacao = document.querySelector("#ultima-modificacao");

function preencherDesafios() {
  if (!desafioSelecionado) {
    return;
  }

  desafios.forEach((desafio) => {
    const option = document.createElement("option");

    option.value = desafio.id;
    option.textContent = desafio.nome;

    desafioSelecionado.appendChild(option);
  });
}

function atualizarRodape() {
  if (anoAtual) {
    anoAtual.textContent = `${new Date().getFullYear()}`;
  }

  if (ultimaModificacao) {
    ultimaModificacao.textContent =
      `Última modificação: ${document.lastModified}`;
  }
}

preencherDesafios();
atualizarRodape();