// Espera o conteúdo da página carregar completamente antes de executar o script.
// É uma boa prática para evitar erros de JavaScript tentando acessar elementos
// que ainda não existem na página.
document.addEventListener('DOMContentLoaded', () => {

    // 1. SELECIONANDO O ELEMENTO
    // ----------------------------
    // Primeiro, precisamos de uma referência ao nosso elemento <textarea>.
    // Usamos 'document.getElementById' para pegar o elemento pelo 'id' que definimos no HTML.
    const blocoDeNotas = document.getElementById('blocoDeNotas');
    const btnLimparNotas = document.getElementById('limparNotas');
    const btnSalvarNotas = document.getElementById('salvarNotas');
    // 2 Adicionando um evento de clique ao botão de limpar notas
    // ------------------------------------
    btnLimparNotas.addEventListener('click', () => {
        // Limpando o conteúdo do bloco de notas
        blocoDeNotas.value = '';
        // Removendo a nota salva do localStorage
        localStorage.removeItem('minhaNota');
        console.log("Notas limpas!");
    });
    // 3 FUNÇÃO PARA SALVAR NOTAS
    // ------------------------------------
    btnSalvarNotas.addEventListener('click', () => {
        localStorage.setItem('minhaNota', blocoDeNotas.value);
        console.log("Notas salvas!");
    });



    // 4 CARREGANDO DADOS DO LOCALSTORAGE
    // ------------------------------------
    // O 'localStorage' é um recurso do navegador que permite salvar informações
    // que persistem mesmo depois que o navegador é fechado.
    // Usamos 'localStorage.getItem()' para buscar um item salvo.
    // Aqui, estamos procurando por um item que salvamos com a chave 'minhaNota'.
    const notaSalva = localStorage.getItem('minhaNota');

    // Verificamos se encontramos alguma nota salva.
    if (notaSalva) {
        // Se 'notaSalva' não for nulo (ou seja, existe algo salvo),
        // nós colocamos o valor salvo de volta no nosso 'blocoDeNotas'.
        blocoDeNotas.value = notaSalva;
    };

});
