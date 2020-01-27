const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna o caracter que está no indice 4
console.log(escola.charAt(3))
console.log(escola.charCodeAt(4)) // retorna o codigo relacionado a tabela unicode
console.log(escola.indexOf('3')) //retorna o indice dele

console.log(escola.substring(1)) 
console.log(escola.substring(0,4))

console.log('Escola '.concat(escola).concat("!")) //para concatenar
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(/,/))
