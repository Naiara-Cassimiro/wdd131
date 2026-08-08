const enigmas = [
  {
    id: 1,
    titulo: "O Buraco",
    categoria: "charadas",
    categoriaNome: "Charadas",
    dificuldade: "Fácil",
    pergunta: "Quanto mais você tira, maior ele fica. O que é?",
    resposta: "Um buraco."
  },
  {
    id: 2,
    titulo: "Os Três Interruptores",
    categoria: "logica",
    categoriaNome: "Lógica",
    dificuldade: "Médio",
    pergunta: "Há três interruptores fora de uma sala e apenas um controla a lâmpada dentro dela. Você pode entrar na sala apenas uma vez. Como descobrir qual interruptor controla a lâmpada?",
    resposta: "Ligue o primeiro interruptor por alguns minutos e depois desligue-o. Ligue o segundo e entre na sala. Se a lâmpada estiver acesa, é o segundo. Se estiver apagada e quente, é o primeiro. Se estiver apagada e fria, é o terceiro."
  },
  {
    id: 3,
    titulo: "Mensagem Secreta",
    categoria: "cifras",
    categoriaNome: "Cifras",
    dificuldade: "Médio",
    pergunta: "Se cada letra foi substituída pela próxima letra do alfabeto, qual palavra está escondida em D B T B?",
    resposta: "CASA. Para descobrir, volte uma posição no alfabeto para cada letra."
  },
  {
    id: 4,
    titulo: "A Família",
    categoria: "logica",
    categoriaNome: "Lógica",
    dificuldade: "Fácil",
    pergunta: "Dois pais e dois filhos foram passear, mas havia apenas três pessoas. Como isso é possível?",
    resposta: "Eram três gerações: avô, pai e filho."
  },
  {
    id: 5,
    titulo: "O que tem cidades?",
    categoria: "charadas",
    categoriaNome: "Charadas",
    dificuldade: "Fácil",
    pergunta: "O que tem cidades, mas não tem casas; tem montanhas, mas não tem árvores; e tem água, mas não tem peixes?",
    resposta: "Um mapa."
  },
  {
    id: 6,
    titulo: "Observe a Sequência",
    categoria: "visuais",
    categoriaNome: "Enigmas Visuais",
    dificuldade: "Médio",
    pergunta: "Observe a sequência: ▲ ● ▲ ● ▲ __. Qual símbolo deve ocupar o espaço vazio?",
    resposta: "●. Os símbolos alternam entre triângulo e círculo."
  }
];

const listaEnigmas = document.querySelector("#lista-enigmas");
const filtroCategoria = document.querySelector("#filtro-categoria");
const resultadoFiltro = document.querySelector("#resultado-filtro");

function criarCartao(enigma) {
  return `
    <article class="cartao-enigma">
      <div class="cartao-enigma-topo">
        <span class="categoria-enigma">${enigma.categoriaNome}</span>
        <span class="dificuldade-enigma">${enigma.dificuldade}</span>
      </div>

      <h3>${enigma.titulo}</h3>

      <p>${enigma.pergunta}</p>

      <button
        type="button"
        class="botao-resposta"
        data-id="${enigma.id}"
        aria-expanded="false"
      >
        Mostrar resposta
      </button>

      <p
        class="resposta-enigma"
        id="resposta-${enigma.id}"
        hidden
      >
        <strong>Resposta:</strong> ${enigma.resposta}
      </p>
    </article>
  `;
}

function exibirEnigmas(lista) {
  listaEnigmas.innerHTML = lista
    .map((enigma) => criarCartao(enigma))
    .join(``);

  resultadoFiltro.textContent =
    `${lista.length} desafio(s) encontrado(s).`;
}

function filtrarEnigmas() {
  const categoriaSelecionada = filtroCategoria.value;

  if (categoriaSelecionada === `todos`) {
    exibirEnigmas(enigmas);
  } else {
    const enigmasFiltrados = enigmas.filter(
      (enigma) => enigma.categoria === categoriaSelecionada
    );

    exibirEnigmas(enigmasFiltrados);
  }
}

function alternarResposta(evento) {
  const botao = evento.target.closest(".botao-resposta");

  if (!botao) {
    return;
  }

  const id = botao.dataset.id;
  const resposta = document.querySelector(`#resposta-${id}`);

  const estaOculta = resposta.hidden;

  resposta.hidden = !estaOculta;
  botao.setAttribute("aria-expanded", estaOculta);

  if (estaOculta) {
    botao.textContent = `Ocultar resposta`;
  } else {
    botao.textContent = `Mostrar resposta`;
  }
}

filtroCategoria.addEventListener("change", filtrarEnigmas);
listaEnigmas.addEventListener("click", alternarResposta);

exibirEnigmas(enigmas);