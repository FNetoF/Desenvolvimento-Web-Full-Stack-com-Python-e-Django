/*
    while(condição) {
        Executa enquando a condição é verdadeira
    }
*/

let numero = 1

while(numero <= 4) {
    console.log(`Pedaço de pizza ${numero}`)
    numero++
}
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
let postagens = [
    "Hoje passeando pela Av Paulista.",
    "Passeando em Campos do Jordão.",
    "Hoje fiz um curso de criação de sites.",
    "Na casa da mamãe, aproveitando o dia."
]

const totalPostagens = postagens.length

let i = 0

while (i < totalPostagens) {
    console.log(`IMAGEM ${i}`)
    console.log(postagens[i])
    console.log(`-----`)
    i++
}

console.log("Total de Postagem " + totalPostagens)
