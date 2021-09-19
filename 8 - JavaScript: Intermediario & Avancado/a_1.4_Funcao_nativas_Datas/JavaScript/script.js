const data = new Date()

console.log(data.toString()) // data.toString()) > Converte a data em uma String.

console.log(`Dia: ${data.getDate()}`) // data.getDate() > Mostra o dia atual

console.log(`Mês: ${data.getMonth() + 1}`) // data.getMonth() > Mostra o mês atual. Retorna os messes de 0 até 11

console.log(`Ano: ${data.getFullYear()}`) // data.getFullYear() > Mostra o ano atual

/*
let d = data.getDate()
let m = data.getMonth()
let a = data.getFullYear()

console.log(`Data: ${d}/${m}/${a}`)
console.log(`Data: ${d}-${m}-${a}`)
*/

let h = data.getHours()
let mi= data.getMinutes()
let s = data.getSeconds()

console.log(`Hora: ${h}:${mi}:${s}`)

// Operação com data
console.log(data.setDate(data.getDate() + 1)) // adiciona dia

console.log(data.setMonth(data.getMonth() + 1 + 2)) // adiciona mês

console.log(data.setFullYear(data.getFullYear() + 1)) // adiciona ano

let d = data.getDate()
let m = data.getMonth()
let a = data.getFullYear()

console.log(`Data: ${d}/${m}/${a}`)
