const usuarios = [
  { nome: 'Jamilton', idade: 32 },
  { nome: 'Maria', idade: 40 },
  { nome: 'Ana', idade: 16 },
];

/*const funcao = item => {
  if (item.idade >= 18) {
    return true;
  } else {
    return false;
  }
};*/

/*const funcao = item => {
  return item.idade >= 18
};*/

const funcao = item => {
  return item.idade >= this.filtro;
};

const filtro = {
  filtro: 18,
};

const usuariosMaiorIdade = usuarios.filter(funcao, filtro);

console.log(usuariosMaiorIdade);

/*Desafio: filtar apenas carros com a marca Hyundai */

const carros = [
  { nome: 'Gol', marca: 'Volkswagem' },
  { nome: 'iX35', marca: 'Hyundai' },
  { nome: 'Santa Fé', marca: 'Hyundai' },
  { nome: 'Polo', marca: 'Volkswagem' },
];

const Hyundai = carro => {
  return carro.marca === 'Hyundai'
}

const CarrosHyundai = carros.filter(Hyundai);

console.log(CarrosHyundai);
/*
const carrosFiltrado = carros.filter(
  carro => carro.marca == "Hyundai"
)
console.log(carrosFiltrado)
*/