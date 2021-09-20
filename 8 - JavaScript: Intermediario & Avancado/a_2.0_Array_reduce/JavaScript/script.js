/*const numeros = [1, 2, 3, 4, 5];

const funcao = function (acumulador, atual, i) {
  console.log('i: ' + i);
  console.log('ac: ' + acumulador);
  console.log('a: ' + atual);
  console.log('------');
  return acumulador + atual;
};

const resultado = numeros.reduce(funcao);

console.log(resultado);
*/
/*Desafio: descobrir se tem produtos em promoção */
const produtos = [
  { nome: 'Notebook', promocao: true },
  { nome: 'Celular', promocao: false },
];

const produtosPromo = produtos.map(produto => produto.promocao);

const funcao = function (acumulador, atual) {
  return acumulador || atual; // true
};

const novo = produtosPromo.reduce(funcao);

console.log(`Tem Promoção ${novo}`);
