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

preencherDesafios();