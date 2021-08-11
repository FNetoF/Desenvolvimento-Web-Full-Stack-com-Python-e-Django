// Function Factory - Design Pattern (padrão de gesign ou padrão de projetos)
// Padrão de projetos -> forma comun de resolver problemas

const produto1 = {
    nome: "Notebook",
    preco: 1200
}

const produto2 = {
    nome: "Notebook",
    preco: 1200
}

const ProdutoFactory = function(nome, preco) {
    return {
        nome,
        preco,
        recuperarAvaliacoes() {
            console.log(`Avaliações para ${this.nome}`)
        }
    }
}

const produto = ProdutoFactory("Notebook", 1200)
//produto.recuperarAvaliacoes()
console.log(`Produto: ${produto.nome} \npreço: ${produto.preco}`)
