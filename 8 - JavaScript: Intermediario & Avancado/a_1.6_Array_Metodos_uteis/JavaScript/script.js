const estados = [
  'São Paulo',
  'Ceará',
  'Rio de Janeiro',
  'Bahia',
  'Goiás',
  'Minas Gerais',
];

/**** Remove elementos do array ****/

estados.pop(); // Remove o último elemento
estados.shift(); // Remove o primeiro elemento

console.log(estados);

/**** Adiciona novos elementos no array ****/

estados.push('Santa Catarina'); // Adiciona o elemento no final
estados.unshift('São Paulo'); // Adiciona o elemento no início

console.log(estados);

/**** Retorna um novo array ****/

const novo = estados.splice(0, 2, 'Teste 1', 'Teste 2'); // Emendar.

console.log(estados);

const novoo = estados.slice(0, 2); // Cortar.

console.log(novoo);

/**** Converte array / String ****/

const usuarios = ['Jamilton', 'Anna', 'Carla'];
let texto = usuarios.join();

console.log(texto);
