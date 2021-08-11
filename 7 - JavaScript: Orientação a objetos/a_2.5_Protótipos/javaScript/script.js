class Carro {
    constructor() {
        this.placa = "AMP - 1230"
    }
}

class Bmw extends Carro {
    constructor() {
        super()
        this.nome = "VMW 320i"
    }
}
/*
const obkBmw = new Bmw()
console.log(objBmw.placa)
console.log(objBmw.name)
*/
// Prototype Chain - encadeamento de objertos

const veiculo = {
    motor: "50 cavalo"
}

const carro = {
    placa : "AMP - 1230",
    __proto__ : veiculo,
    acelerar: function() {
        console.log("Acelerar")
    }
}

const bmw = {
    nome : "BMW 320i",
    motor : "300 cavalo",
    __proto__ : carro
}

bmw.acelerar()
console.log(bmw.placa)
console.log(bmw.motor)