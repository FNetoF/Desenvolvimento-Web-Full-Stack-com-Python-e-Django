/*
typeof []
typeof new Array
*/
/*
const nomes = ["Felipe", "Jamilton"]
const frutas = new Array("Morango", "Banana")

console.log(nomes)
console.log(frutas)
*/

const nomes = ["Felipe", "Jamilton"]
nomes.push("Pedros")
// delete nomes[0]
nomes[0] = "Teste" // Alterando valor da posição 0
nomes.sort() // Orderna em ordem alfabética ou numérica
console.log(nomes)
