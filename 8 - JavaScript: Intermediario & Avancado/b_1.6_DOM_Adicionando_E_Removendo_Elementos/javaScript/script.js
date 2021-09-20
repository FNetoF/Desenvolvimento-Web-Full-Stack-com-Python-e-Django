// const obj = document.getElementById('conteudo')
// obj.textContent = "<p style='color:red'>Jamiton</p>"
// obj.innerHTML = "<p style='color:red'>Jamiton</p>"

const ul = document.getElementById('itens');
const li = document.createElement('li');

/*
	const ulFilha = document.createElement('ul')
	const liFilha = document.createElement('li')
	liFilha.textContent = "li criada"
	ulFilha.appendChild(liFilha)*/

// li.setAttribute('teste', '10')
// li.textContent = "Jamilton"
const texto = document.createTextNode('Jamilton');

function adicionar() {
  /*
    li.appendChild(texto)
    ul.appendChild(li)*/

  li.appendChild(texto);
  ul.insertBefore(li, ul.children[1]);

  const itemClonar = document.getElementById('item-clonar');
  const item = itemClonar.cloneNode(true);
  ul.appendChild(item);
}

function remover() {
  ul.removeChild(li);
}
