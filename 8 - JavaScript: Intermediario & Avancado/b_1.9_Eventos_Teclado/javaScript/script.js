function executar(){
  console.log("Executar")
}

const obj = document.getElementById('entrada')
//obj.addEventListener('keydown', executar)
//obj.addEventListener('keyup', executar)
obj.addEventListener('keypress', executar)