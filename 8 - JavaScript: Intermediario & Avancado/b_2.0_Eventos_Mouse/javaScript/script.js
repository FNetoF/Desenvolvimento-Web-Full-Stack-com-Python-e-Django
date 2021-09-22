function executar() {
  console.log('Executar');
}

function keydown() {
  console.log('keydown');
}

const obj = document.getElementById('entrada');
obj.addEventListener('click', executar);
obj.addEventListener('keydown', keydown);
//obj.addEventListener('dblclick', duplo)
//obj.addEventListener('mousedown', executar)
//obj.addEventListener('mouseup', executar)
//obj.addEventListener('mousemove', executar)
//obj.addEventListener('mouseover', mouseover)
//obj.addEventListener('mouseout', executar)
