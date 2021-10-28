$(function(){

	$('[acao-clique]').on('click', function(){
		let duracao = 1000
		/*$('#animacao').hide(duracao, function(){
			console.log('animacao finalizou')
		})*/
		//$('#animacao').toggle(duracao)//hide, show, toggle
		
		//fadeIn(), fadeOut(), fadeTo(duracao,opacidade)
		//$('p').fadeTo(duracao, 0.5)
		//$('#animacao').fadeToggle(duracao)

		//slideUp, slideDown, slideToggle
		//$('#animacao').slideToggle(duracao)
		$('p').slideToggle(duracao)

	})

})