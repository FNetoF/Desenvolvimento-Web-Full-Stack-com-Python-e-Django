/**
 * Operadores Aritméticos
 * Somar (+)
 * Subtrair (-)
 * Multiplicar (*)
 * Dividir (/)
 */

let numero1 = 10
let numero2 = 5

let resultadoSoma = numero1 + numero2
let resultadoSubtrair = numero1 - numero2
let resultadoMultiplicar = numero1 * numero2
let resultadoDividir = numero1 / numero2

console.log(resultadoSoma)
console.log(resultadoSubtrair)
console.log(resultadoMultiplicar)
console.log(resultadoDividir)

/*
    Precedência de execução
    0) Parênteses
    1) Multiplicação e divisão
    2) Adição e subtração
 */

// 4 + 4 / 2
// 2 + 2 / 2 * 2 // 2 + 1 * 3
// 2 + 2 * 2 / 3 // 2 + 4 / 3
// 2 * 2 / 2
// 5 - 2 + 2

let res = (4 + 4) / 2 
console.log(res)
