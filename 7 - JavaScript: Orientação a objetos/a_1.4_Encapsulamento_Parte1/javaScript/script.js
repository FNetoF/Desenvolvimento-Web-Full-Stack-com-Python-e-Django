//  Encapsulamento
class Carro {
  constructor() {
    this.modelo = "Argo"
    this.cor = "Prata"
  }

  frear() {
    console.log("Parar o carro")
  }

}

const carro = new Carro()
carro.frear()