/*
    Paradigma -> exemplo ou padrão a ser seguindo, não se trata
    de um linguagem, mas a forma como você soluciona problemas usando
    uma linguagem de programação.
*/

// Javascript é multi paradigma

// Procedural
function verificarDisponibilidade(quartos, oculpados) {
  const result = quartos - oculpados;
  console.log("Disponíveis: " + result);
}

const quartos = 20;
const ocupados = 5;
verificarDisponibilidade(quartos, ocupados);

// Orientado a objetos
const hotel = {
    quartos: 20,
    ocupados: 10,
    verificarDisponibilidade: function () {
        const result = this.quartos - this.ocupados 
        console.log("Disponíveis: " + result)
    }
}

hotel.ocupados = 5  // Ou  hotel['ocupados'] = 5
hotel.verificarDisponibilidade()