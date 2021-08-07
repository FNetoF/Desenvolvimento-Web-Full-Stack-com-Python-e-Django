/*
    Estruturas Condicionais if else 
    - Verificar idade para entrar no site;
    - Verificar se a compra é maior do que o mínimo;
    - Verificar se tem acesso a recursos pagos.
*/

let idade = 18
if (idade >= 18) {
    console.log("Maior de idade")
}

let idadee = 30
let compras = 400

if (idadee >= 40 || compras >= 400) {
    console.log("Desconto de 20%")
}
else {
    console.log("Não tem Desconto")
}


let opcao = 1

if (opcao == 1) {
    console.log("Saldo conta")
}
else if (opcao == 2) {
    console.log("Cartão de crédito")
}
else if (opcao == 3) {
    console.log("Desconto indevidos")
}
else {
    console.log("Opção inválida")
}