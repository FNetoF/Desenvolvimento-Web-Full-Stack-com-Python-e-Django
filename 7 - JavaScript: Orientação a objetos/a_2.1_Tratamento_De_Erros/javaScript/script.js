// Tratamento de erros com Try Catch
function contarQuantidadeLetras(produto) {
  // (O try) vai tentar executar o bloco de código, se não der  certo ele vai pegar (catch) o erro
  try {
    console.log(produto.nome.length)
  }
  catch (erro) {
    console.log("Erro ao processar, código: 167")
  } 
  finally {
    console.log("Finally")
  }
}

const produto = {
  nome: "Notebook",
  preco: 1200
}

contarQuantidadeLetras(produto)
