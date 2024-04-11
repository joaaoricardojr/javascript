// ------- Excluir elementos duplicados de um array ------- //

const array = [3, 5, 5, 7, 9, 9, 1, 9, 2, 5, 7, 9, 2, 42, 12, 56, 87, 34, 23, 34];
const arraySemDuplicados = [...new Set(array)];
// console.log(arraySemDuplicados);


// ------- Bloqueio de cópia do conteúdo ------- //
document.addEventListener('copy', function (event) {
    // Impede a cópia padrão
    event.preventDefault();

    // Substitui o texto selecionado pela mensagem personalizada
    var mensagem = `Leia mais no texto original: (link) © 2024 Todos os direitos são reservados à NomeDaEmpresa, conforme a Lei nº 9.610/98. A publicação, redistribuição, transmissão e reescrita sem autorização prévia são proibidas.`;
    event.clipboardData.setData('text/plain', mensagem);
});