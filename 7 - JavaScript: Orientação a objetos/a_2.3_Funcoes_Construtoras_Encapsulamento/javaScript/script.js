// Funções construtoras - encapsulamento

const Hotel = function () {
    this.nome = "Hotel do Felipe"
    this.quantidadeSuite = 30
    let suitesOcupadas = 25

    this.reservar = function() {
        if(suitesOcupadas < this.quantidadeSuite) {
            suitesOcupadas++
            console.log(`Ocupadas: ${suitesOcupadas} suites`)
        }
        else {
            console.log(`Estamos lotados`);
        }    
    }
}

const hotel = new Hotel()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
