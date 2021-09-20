console.log(imagem.getAttribute('src')); // Capturar elemento/atributo
console.log(imagem['src']); // Capturar elemento/atributo
console.log(imagem.src); // Capturar elemento/atributo

function alterar() {
  const imagem = document.querySelector('#imagem');
  imagem.src = '../img/grafico.png';
}
