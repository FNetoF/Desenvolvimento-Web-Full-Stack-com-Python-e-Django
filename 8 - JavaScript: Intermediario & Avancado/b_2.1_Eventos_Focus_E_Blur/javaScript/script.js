function executar() {
  console.log('Executar');
  //obj.focus()
}

function keydown() {
  console.log('keydown');
}

const obj = document.getElementById('entrada');
//obj.addEventListener('focus', executar)
obj.addEventListener('blur', executar);
//obj.addEventListener('keydown', executar)
