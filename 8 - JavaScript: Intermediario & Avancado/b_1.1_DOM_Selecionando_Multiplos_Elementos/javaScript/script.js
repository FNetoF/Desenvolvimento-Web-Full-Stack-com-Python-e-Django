function executar() {
    const obj = document.querySelector('li.primeiro')
    obj.innerHTML = "teste"
    obj.classList.add("destaque")
}

//const obj = document.getElementById('destaque')
//const obj = document.querySelector('li.primeiro')
//console.log(obj.textContent)

//const colecao = document.getElementsByTagName('li')
//const obj = document.getElementsByClassName('vermelho')
//const obj = document.getElementsByName('nome')
const obj = document.querySelectorAll('li.primeiro')

/*for(let i=0; i < obj.length; i++){
    console.log(obj[i].textContent)
}
const lista = Array.from(colecao)
const funcao = function(item,i){
    console.log(item.textContent)
}
lista.forEach(funcao)*/
console.log(obj.item(1).textContent)