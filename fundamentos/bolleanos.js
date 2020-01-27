let isAtivo = false

console.log(isAtivo)

isAtivo = true   //true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // true

isAtivo = 1
console.log(!isAtivo) // false

//resolver para verdadeiro

console.log('...os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('...os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("pra finalizar...")
console.log(!!("" || null || 0 || "epa "))

let nome = 'Vitor'

console.log(nome || 'Desconhecido')