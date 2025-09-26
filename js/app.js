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
    //Declarando função para embaralhar elementos da lista
    embaralha(listaNomes);

}

//Adicionando função que embaralha os elementos da lista, essencial para o sorteio
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    //Limpando campo de nomes digitados
    document.getElementById("lista-amigos").textContent = "";
}