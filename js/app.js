let listaNomes = [];
function adicionar(){
    //Obter nome digitado pelo usuário
    let nomeDigitado = document.getElementById("nome-amigo").value;

    //Adicionar o nome em uma lista
    listaNomes.push(" " + nomeDigitado);

    //Exibir lista no campo de nomes
    let campoNomes = document.getElementById("lista-amigos");
    campoNomes.textContent = listaNomes;

    //Limpando campo de digitação após a inclusão do nome
    document.getElementById("nome-amigo").value = "";
}

function sortear(){

}

function reiniciar(){

}