/*class Produto {

}

// Funções construtoras (objetos)
const Hotel = function () {

}*/

const Hotel = function () {
    this.nome = "Hotel do Felipe"
    this.quantidadeSuite = 30
    this.suitesOcupadas = 25

    this.reservar = function() {
        console.log(`Ocupadas: ${this.suitesOcupadas} suites`)
        this.suitesOcupadas ++
    }
}

const hotel = new Hotel()
hotel.reservar()
hotel.reservar()
