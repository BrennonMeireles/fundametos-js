// metodos de console

console.log("Teste")
console.info("ola mundo")
console.warn("Warn")
console.error("Error")

// variaveis

var a = 10
let b = 15
const c = 20

a = "oi"
b = 500

console.log(a, b)

// Tipos de dados

// String
const name = "Maria"
console.log(typeof Username)
// number
const age = 35
console.log(typeof age)
// boolean
const isApproved = false
console.log(typeof isApproved)
// nulo
let lastName = null
console.log(typeof lastName)
// undefined
let address
console.log(address)
// array
const languages = ['JavaScript', 'Python']
console.table(languages)
// objeto
const user = {name : "Mara", email: "maria@gmail.com"}
console.log(user)

// metodos strings 

const fullName = "Brennon Meireles"

// conta os caracteres da variavel
console.log(fullName.length)

fullName.length > 10 ? console.log("aprovado") : console.log("reprovado")

// quebra a string confome o caracter selecionado
const stringToArray = fullName.split(' ')
console.log(stringToArray)

// deixa a string com os caracteres maiusculos
console.log(fullName.toUpperCase())

// deixa a string com os caracteres minusculos
console.log(fullName.toLowerCase())

// encontra o indice do inicio da palavra
console.log(fullName.indexOf("me"))

// retira a string pelo indice
console.log(fullName.slice(9, 17))

// metodos de Array
const list = ['a', 'b', 'c', 'd', 'e']

console.table(list)

// conta os caracteres do array
console.log(list.length)

// busca o item espefico do array
console.log(list[2])

// busca o item do array pelo nome e traz o indice
console.log(list.indexOf("c"))

// inserir item no array sem metodo
list[5] = 'f'
console.table(list)

// inserir item no array com o metodo push
console.log(list.push('g'))
console.table(list)

// trazer o ultimo item do array
console.log(list[list.length - 1])

// remove o ultimo item do array
list.pop()
console.log(list)

// remove o primeiro item do array
list.shift()
console.log(list)

// insere um item no inicio do array 
list.unshift('inicio')
console.log(list)

// retira um pedaço do array pelo indice
console.log(list.splice(2, 5))

// metodo do objeto

const product = {
    name: 'camisa',
    price: 15.99,
    inStock: true,
    sizes: ['P', 'M', 'G', 'GG']
}

console.table(product)
// percorremos as propiedades do objeto
// com o .
console.log(product.name)

// adicionando uma noa propiedade no objeto
product.color = ['Azul', 'Rosa']
// exibindo o resultado 
console.log(product)

// desestruturação do 
const { inStock , price } = product

console.log(inStock, price)

// JSON

const cat = {
    name: 'Bola de Pelo',
    age: 2,
    race: 'Persa'
}

console.log(cat)

// transforma o dado que esta em JSON em string
const catString = JSON.stringify(cat)
console.log(catString)

// transforma o dado em JSON
const catJSON = JSON.parse(catString)
console.log(catJSON)