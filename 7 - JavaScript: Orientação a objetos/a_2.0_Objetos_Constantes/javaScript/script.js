const produto = {
  nome: "Notebook"
}

produto.nome = "Celular"

console.log(produto.nome)


const produtoo = {
  nome: "Notebook"
}

Object.freeze(produtoo) // O medoto freeze converte o objeto em uma constante
produtoo.nome = "Celular"

console.log(produtoo.nome)
