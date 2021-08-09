/*
  Pilar 1 - Abstração

  Modelo, Entidade, Identidade, Características e Ações
*/

class Carro {
  constructor() {
    this.marca = "Fiat"
    this.modelo = "Toro"
    this.cor = "Marron Deep"
  }
}

const carro = new Carro()
carro.modelo = "Argo"
console.log(carro.modelo)

const carro2 = new Carro()
console.log(carro2.modelo)

// Loja virtual 
class Produto {
  constructor() {

    //roupas
    this.tamanho = "M",
    this.cor = "Vermelho",
    this.preco = "45.90"

    //Eletronicos
    this.altura = "50cm",
    this.largura = "30cm"
  }
}
