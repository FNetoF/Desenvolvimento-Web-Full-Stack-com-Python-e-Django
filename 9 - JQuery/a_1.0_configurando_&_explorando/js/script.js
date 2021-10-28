// const obj = jQuery()
// const obj = $('h1')
// console.log(obj)
$('[acao-clique]').click(function () {
  // $('#conteudo').addClass('destaque')
  // $('#conteudo').removeClass('destaque')
  // $('ul li').addClass('destaque')
  // $('ul#lista li').addClass('destaque')
  // $('h1').addClass('destaque')
  // $('[acao-clique]').addClass('destaque')
  // $('[ativo="sim"]').addClass('destaque')
  // $('*').addClass('destaque')

  /*encadeamento*/
  // $('h1')
  // .css('color','white')
  // .addClass('destaque')

  /* Seletores exclusivos jQuery (filtros) */
  // $('ul li:first').addClass('destaque') // add o primeiro elemento
  // $('ul li:last').addClass('destaque') // add o último elemento
  // $('ul li:eq(2)').addClass('destaque') // Delecionando elemento específico
  // $('ul li:gt(1)').addClass('destaque') // Seleciona maior que 1
  // $('ul li:lt(2)').addClass('destaque') // Seleciona menor que 2
  // $('ul li:odd').addClass('destaque') // Vai alterar entre os elementos
  // $('#area :header').addClass('destaque') // Selecionando cabeçalho
  // $('ul li:hidden').show() // Isibir elementos escondido 
  // $('ul li:contains("ana")').addClass('destaque') // Pesquizar o que contem detro do texto

  /*Filtros de formulário*/
  // $('form :input').hide() // Esconde os itens do formulário
  // $('form :text').toggle() // Esconde o item caso ele esteja vicivel ou ixibi o item caso ele esteja escondido
  // $('form :password').toggle()
  // $('form :radio').toggle()
  // $('form :checkbox').toggle()
  $('form :submit').toggle();
});
