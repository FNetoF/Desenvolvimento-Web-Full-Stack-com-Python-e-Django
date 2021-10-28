$('[acao-clique]').click(function(){
  /* Inserindo elementos */
  /* before->antes after->depois */
  //$('#conteudo').after('<strong>Jamilton</strong>')
  //$('#conteudo').before('<strong>Jamilton</strong>')

  //$('<strong>Jamilton</strong>').insertBefore('#conteudo')
  //$('<strong>Jamilton</strong>').insertAfter('#conteudo')

  /*append -> acrescentar prepend->prefixar*/
  //$('#conteudo').prepend('[ANTES]')
  //$('#conteudo').append('[DEPOIS]')
  //$('#conteudo').append('[DEPOIS]').prepend('[ANTES]')

  //$('<span>[ANTES]</span>').prependTo('#conteudo')
  //$('<span>[DEPOIS]</span>').appendTo('#conteudo')

  //const lista = ['ANTES1', 'ANTES2', 'ANTES3']
  //$('#conteudo').after(lista)//before, prepend, append

  /* Removendo e movendo e clonando */
  //$('h1').remove()
  //const retorno = $('h1').detach()
  //$('#conteudo').before(retorno)

  //const retorno = $('ul').clone()
  //$('#conteudo').before(retorno)

  /* Criando elementos e envolvendo */
  //let item = $('<li>').append('Novo')
  //$('ul').append(item)
  //let p = $('<p>').append('Paragrafo')
  //$('#conteudo').prepend(p)
  //$('h1').wrap('<div>')
  //$('p').wrap('<div>')
  //$('p').wrapAll('<div>')
  //$('span').unwrap()
  //$('#conteudo').empty()

  //$('#conteudo').replaceWith('<span>j</span>')
  //$('<span>j</span>').replaceAll('#conteudo')

  $('p').replaceWith(function(){
    const texto = $(this).html()
    return $('<span>').html(texto)
  })

})