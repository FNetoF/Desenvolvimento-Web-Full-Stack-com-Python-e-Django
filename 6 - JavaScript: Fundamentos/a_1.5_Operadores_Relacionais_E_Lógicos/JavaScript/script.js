/*
    Operadores relacionais (retorna verdadeiro ou falso)
    == (igual a)
    != (diferente)
    > (maior que)
    < (Menor que)
    >= (Maior ou igual)
    <= (Menor ou igual)
*/

let result1 = 10 == 9;
let result2 = 10 != 9;
let result3 = 10 > 9;
let result4 = 10 < 9;
let result5 = 10 >= 9;
let result6 = 10 <= 9;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
let idade = 25;
let result = idade > 18;

console.log(result);

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
let pedidoMinimo = 100
let compaPessoa = 250
let resultado = compaPessoa > pedidoMinimo

console.log(resultado);

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

/*
    Operadores lógicos (testa condições com true ou false)
    && (e)
    || (ou)
*/

let result7 = true && true
let result8 = 2 == 2 && 1 == 1
let result9 = 2 == 5 || 1 == 1

let idadee = 45
let result10 = idadee >= 18 && idadee <= 40

console.log(result7)
console.log(result8)
console.log(result9)
console.log(result10)

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

let idadeee = 45
let totalCompra = 150

let result11 = idadeee >= 40 || idadeee >= 200

console.log(result11)