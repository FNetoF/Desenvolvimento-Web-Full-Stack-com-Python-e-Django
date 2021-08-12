// Parâmetros padrões

function somar(numero1, numero2) {

    numero1 = isNaN(numero1) ? 0 : numero1
    numero2 = isNaN(numero2) ? 0 : numero2

    return numero1 + numero2
}

const result = somar(5, 10)
console.log(`${result}`)

// isNaN -> Verifica se é um número
// NaN -> Not a Number ( não é um número )

function soma(num1 = 0, num2 = 0) {

    num1 = isNaN(num1) ? 0 : num1
    num2 = isNaN(num2) ? 0 : num2

  return num1 + num2
}

const resultado = soma(5, 50)
console.log(`${resultado}`)


// Paramentros e retornos opcionais
const calcularSalario = (salario, desconto) => {
    desconto = isNaN(desconto) ? 0 : desconto
    return salario - desconto
}

const resulta = calcularSalario(100, 20)
console.log(resulta)
