/*
    1) Desligar a torneira.
    2) Pedir copo de água.
    3) Ir ao mercado comprar arroz.
*/

function desligarTorneira() {
    console.log("Desligar torneira")
}

desligarTorneira()

function pedirCopoAgua() {
    return "Copo Água"
}

let retorno = pedirCopoAgua()
console.log(retorno)
console.log(pedirCopoAgua())


function irMercadoComprarArroz(dinheiro) {
    return "arroz"
}

let result = irMercadoComprarArroz(10)
console.log(result)

function calcularMedia(nota1, nota2) {
    let totalNotas = nota1 + nota2
    let media = totalNotas / 2
    return media
}

let media = calcularMedia(8, 8)
let novaMedia = media + 1
console.log(media)
console.log(novaMedia)