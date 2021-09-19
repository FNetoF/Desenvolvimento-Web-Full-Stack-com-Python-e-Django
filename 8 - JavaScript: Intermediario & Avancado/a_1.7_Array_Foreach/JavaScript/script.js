const lista = ['Jamilton', 'Ana', 'Pedro', 'Felipe'];

/*
for (indice in lista) {
  console.log(lista[indice])
}
*/

const pecorrer = function() {
  console.log("item")
}

const pecorrer1 = function(item) {
  console.log(item)
}

const pecorrer2 = function(indice) {
  console.log(indice)
}

lista.forEach(pecorrer)
console.log("=+=+=+=+=+=+")
lista.forEach(pecorrer1)
console.log("=+=+=+=+=+=+")
lista.forEach(pecorrer2)
console.log("=+=+=+=+=+=+")
lista.forEach(item => console.log(item))
