// Objetos literais - melhorias

let nome = "Notebook"
let preco = 1200

/*const produto = {
    nome: nome,
    preco: preco,
    exibirProdutos : function () {
        console.log(`${this.nome}, ${this.preco}`)
    }
}*/

const produto = {
  nome,
  preco,
  exibirProdutos() {
    console.log(`${this.nome}, ${this.preco},  ${this.categoria}`)
  }
}
// Pode declarar de forma dinâmica uma chave : valor fora do objeto.
produto.categoria = "Eletrônicos"
produto.exibirPreco = function() {
    console.log(`Preço R$ ${this.preco}`)
}

produto.exibirProdutos()
produto.exibirPreco()
console.log(produto.nome)


const pro = produto
pro.preco = 2000

console.log(pro.preco)
console.log(produto.preco)
