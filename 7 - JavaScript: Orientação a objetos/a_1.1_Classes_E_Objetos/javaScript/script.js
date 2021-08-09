// Notação de construtor (Objeto em branco/vazio)
/*const hotel = new  Object();
hotel.quartos = 20
hotel.ocupados = 10
hotel.verificarDisponibilidade = function () {
    let result = this.quartos - this.ocupados
    return "Disponível: " + result
}

console.log(hotel.quartos)
console.log(hotel.verificarDisponibilidade())*/

// Criando classes (mais simples)
class Hotel {
    constructor() {
      this.quartos = 20;
      this.ocupados = 10;
    }

  verificarDisponibilidade() {
      const result = this.quartos - this.ocupados
      return "Disponibilidade: " + result
  }
}

const hotel = new Hotel()
const disponivel = hotel.verificarDisponibilidade()
console.log(disponivel)
console.log(hotel.quartos)