const nome = "Carro do Felipe"

console.log(nome.length) // Quantidade de letras 
console.log(nome.charAt(3)) // Pega a posição da String
console.log(nome.replace("Felipe", "Outro Nome")) // substitui a primeira string por outra 

console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=`)

const frase = "O sucesso é ir de fracasso em fracasso sem o entusiasmo"

const result = frase.substr(0, 30) + "..." // string.substr(start, length)  > start é a posição inicial que você quer pegar. O length é a quantidade de caracteres que você quer utilizar.

console.log(result)

console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=`)

const name = "Felipe-Neto"
 const resultado = name.split("-") // string.split() > faz uma divição entre string 

  console.log(resultado)
 console.log(resultado[0])

console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=`)

let nomee = `Felipe`
let sobrenome = "Ferreira"
let s = sobrenome.slice(0, 6)

console.log(`${nomee}${s}@empresa.com.br`)

let pesquisa = "felipe ferreira"
let itemSalvo = "FElipE feRreiRA"

// pesquisa.toUpperCase() // Converte todas as letras para maiúscula 
let item = pesquisa.toLocaleLowerCase() // Converte todas as letras para minúsculo

console.log(pesquisa.toUpperCase())
console.log(pesquisa.toLocaleLowerCase())

if(pesquisa == item) {
    console.log("Achei")
}

console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=`)

let namee = "        Felipe Neto       "

console.log(namee.trim()) // string.trim() > remove o espaçamento laterais

let a = "Olá"
let b = "Felipe"
let c = "Ferreira"

console.log(a.concat(" ", b, " ", c))

// concat() > Junta string

// site, para mais manipulação de texto > https://www.w3schools.com/jsref/jsref_obj_string.asp