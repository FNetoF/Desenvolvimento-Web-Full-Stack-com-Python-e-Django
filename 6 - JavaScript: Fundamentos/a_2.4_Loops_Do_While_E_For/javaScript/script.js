// While

let numero = 1 

console.log(`Do maior para o menor:`)
while (numero <= 5) {
    console.log(`Executou ${numero}`)
    numero++
}

console.log(`=-=-=-=-=-=-=-=-=-=-=-=-`)

let i = 5;

console.log(`Do menor para o maior:`)
while (i >= 1) {
  console.log(`Executou ${i}`);
  i--
}

console.log(`=-=-=-=-=-=-=-=-=-=-=-=-`);

// doo..while 

let num = 1
console.log(`Do maior para o menor:`);
do {
  console.log(`Executou ${num}`);
  num++;
} while (num <= 5)

console.log(`=-=-=-=-=-=-=-=-=-=-=-=-`);

//for

console.log(`Do maior para o menor:`);
for (let ii = 0; ii <= 5; ii++) {
    console.log("Executou " + ii);
}

console.log(`=-=-=-=-=-=-=-=-=-=-=-=-`)

console.log(`Do menor para o maior:`)
for (let ii = 5; ii >= 1; ii--) {
    console.log("Executou " + ii)
}

console.log(`***********************`)

let postagens = [
    "Hoje passeando pela Av Paulista.",
    "Passeando em Campos do Jordão.",
    "Hoje fiz um curso de criação de sites.",
    "Na casa da mamãe, aproveitando o dia."
]

for(indice in postagens) {
    console.log(postagens[indice])
}

/*let total = postagens.length

for (let i = 0; i < total; i++) {
    console.log(postagens[i])
}*/