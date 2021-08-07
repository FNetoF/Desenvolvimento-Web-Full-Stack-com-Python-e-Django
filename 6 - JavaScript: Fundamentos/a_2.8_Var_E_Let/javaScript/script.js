// Var vs let (Escopo)

// var -> // global, função
// let -> // global, função, bloco

// let numero = 10 
{
    let numero = 5
    console.log(numero)
}

function calcular() {
    numero = 12
}

// calcular()
// numero = 20
console.log(numero)
