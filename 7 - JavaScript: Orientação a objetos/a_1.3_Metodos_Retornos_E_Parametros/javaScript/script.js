// Métodos - parâmetros e retornos 

class Usuario {
  constructor() {
    this.email = " "
    this.senha = " "
    this.subtotalCompra = 0
  }

  logar() {
    let emailBD = "fe@gmail.com"
    let senhaBD = "1234"

    if (senhaBD === this.senha) {
      // console.log("Senha válida")
      return "Senha válida"
    }
    else {
      // console.log("Senha invalida")
      return "Senha inválida"
    }
  }

  calcularDesconto(cupom) {
    let desconto = 0
    if (cupom === "DESC20") {
      desconto = 20
    } 
    else if (cupom === "FESTA10") {
      desconto = 10
    }

    return this.subtotalCompras - desconto
  }
}

const usuario = new Usuario()

usuario.email = "fe@gmail.com"
usuario.senha = "1234"

console.log(usuario.logar())

const compraTotal = usuario.subtotalCompra = 500
const descontoTotal = usuario.calcularDesconto("DESC20")

console.log(`Total R$ ${compraTotal}`)
