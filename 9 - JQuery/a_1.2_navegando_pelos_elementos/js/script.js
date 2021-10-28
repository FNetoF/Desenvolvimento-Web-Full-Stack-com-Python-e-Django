$('[acao-clique]').click(function(){
			
  //$('span').parent().addClass('destaque')
  //$('span').parents().addClass('destaque')
  //$('li:first').next().addClass('destaque')
  //$('li:last').prev().addClass('destaque')
  //$('h1').prev().addClass('destaque')
  //$('h1').next().addClass('destaque')

  //$('li:first').nextAll().addClass('destaque')
  //$('li:last').prevAll().addClass('destaque')

  //$('[selecionado]').siblings().addClass('destaque')

  //$('span').parent().next().addClass('destaque')
  //$('span').parent().prev().addClass('destaque')
  //$('ul').children().addClass('destaque')
  //$('#conteudo').children().addClass('destaque')
  //$('body').find('li').addClass('destaque')

  let elementoDom = document.getElementById('conteudo')
  //$(elementoDom).addClass('destaque')
  /*
  $('li').each(function(i,elemento){
    $(elemento).addClass('destaque')
  })*/

  $('ul').children().each(function(i,elemento){
    $(elemento).addClass('destaque')
  })


})