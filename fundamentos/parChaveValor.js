// par nome/valor

const saudacao = 'Opa' //Contexto léxico 1

function exec (){

    const saudacao = "Falaa" // Constante léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor
const Cliente = {
    nome : 'Pedro',
    idade : 32,
    peso : 100,
    endereco: {
        logradouro : "rua muito legal",
        numero : 123
    }

}

console.log (saudacao)
console.log (exec())
console.log (Cliente)