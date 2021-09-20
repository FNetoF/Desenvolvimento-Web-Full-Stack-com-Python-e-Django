/*const cadastro = document.getElementsByName('cadastro');

console.log(cadastro[0]);
*/

// console.log(document.forms)
// console.log(document.forms[0])
// console.log(document.cadastro.nome);
// document.cadastro.nome.value = 'Felipe';

function salvar() {
  /*document.cadastro.nome.value = 'Jamilton';
    document.cadastro.email.value = 'j@gmail.com';
    document.cadastro.sexo.value = 'masculino';*/
  /*     Recuperar dados digitados
  let nome = document.cadastro.nome.value;
  let email = document.cadastro.email.value;
  let sexo = document.cadastro.sexo.value;

  console.log(nome);
  console.log(email);
  console.log(sexo);*/

  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const sexo = document.getElementById('sexo');

  console.log(nome.value);
  console.log(email.value);
  console.log(sexo.value);
}
