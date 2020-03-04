console.log(Math.ceil(6.1))

const obj1 = {

}

obj1.nome = 'Bola'
obj1.idade = 32

console.log(obj1.idade)
console.log(obj1.nome)
console.log(obj1)

function Obj (nome){
    this.nome = nome
}

const obj2 = new Obj('Vitu')
const obj3 = new Obj('Vitu2')

console.log (obj2.nome)
console.log (obj3.nome)