// Armazenando uma funcao em uma variável
const imprimirSoma = function (a,b){
    console.log(a + b)
}
imprimirSoma(2,3)


//Armazenando uma funcao arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log (soma(5,4))


// retorno implícito
const subtracao = (a,b) => a - b
console.log(subtracao(5,3))

// Arrow function com um parâmetro somente
const imprimir2 = a => console.log(a)
imprimir2(4)