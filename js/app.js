let listaNomes = [];
function adicionar(){
    //Obter nome digitado pelo usuário
    let nomeDigitado = document.getElementById("nome-amigo").value;

    //Adicionar o nome em uma lista
    listaNomes.push(" " + nomeDigitado);

    //Exibir lista no campo de nomes
    let campoNomes = document.getElementById("lista-amigos");
    campoNomes.textContent = listaNomes;
}

function sortear(){

}

function reiniciar(){

}