// Obtém o ano atual automaticamente
const anoAtual = new Date().getFullYear();


// Coloca o ano no rodapé
document.getElementById("anoatual").textContent = anoAtual;


// Obtém a data da última atualização do arquivo
const ultimaModificacao = document.lastModified;


// Exibe a data da última modificação
document.getElementById("ultimaModificacao").textContent =
    `Última atualização: ${ultimaModificacao}`;