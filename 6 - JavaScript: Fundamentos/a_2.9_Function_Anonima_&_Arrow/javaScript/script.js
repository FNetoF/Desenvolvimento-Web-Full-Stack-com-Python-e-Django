// Function Literal
function soma(a, b) {
    console.log(a + b)
}
soma(1, 2)

// Function anônima (sem nome)
const somar = function(a, b) {
    console.log(a + b)
}
somar(5, 5)

//  Function srrow (seta)
const somarr = (a, b) => {
    console.log(a + b)
}
somarr(10, 10)

// Function ( retorno implícito )
const somarrr = (a, b) => console.log(a + b)

const somarrrr = (a, b) => a + b

const exibir = n => console.log("Nome " + n)

somarrr(50, 50)

let resultado = somarrrr(100, 100)
console.log(resultado)

exibir("Felipe")
