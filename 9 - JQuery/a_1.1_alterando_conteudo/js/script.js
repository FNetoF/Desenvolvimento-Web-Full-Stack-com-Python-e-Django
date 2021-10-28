$('[acao-clique]').click(function () {
  /* Obter e alterar conteúdos */
  // const res = $('#conteudo').text() //html, text - Recuperando o valor/conteudo
  // console.log(res)
  // $('#conteudo').text('<span>Jamilton</span>') // Configura ou recupera apenas o texto
  // $('#conteudo').html('<span>Jamilton</span>')
  // $('ul').html('<li>Alterado</li>')
  /* $('ul li').html(function(){
    let item = $(this).text()
    //return `<strong>${item}</strong>`
    return `+ ${item}`
  })

  $('ul li').text(function(){
    let item = $(this).text()
    return `<strong>${item}</strong>`
    //return `+ ${item}`
  })*/

  /* Obtendo e configurando atributos */
  // let quantidade = $('ul').attr('quantidade')
  // console.log(quantidade)
  // $('ul').attr('tempo', '10')
  // $('ul').removeAttr('quantidade')

  /* Adicionando e removendo classes */
  // $('ul').addClass('destaque')
  // $('ul').removeClass('destaque')

  /* Recuperando e alterando propriedades css */
  // let propriedade = $('ul li').css('color')
  // console.log(propriedade)

  // $('ul li').css('color', 'red')
  $('ul li').css({
    'background-color': 'red',
    color: 'white',
    'font-size': '50px',
  });
});
