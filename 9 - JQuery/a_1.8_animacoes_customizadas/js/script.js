function callback(){
	console.log('terminou animação')
}

$(function(){

	$('body').on('keydown', function(e){
		let codigo = e.keyCode
		//console.log(codigo)
		if(codigo==39){//direita
			$('#conteudo').animate(
				{
					left: "+=40",
					right: "-=40"
				}
			)
		}else if(codigo==37){//esquerda
			$('#conteudo').animate(
				{
					right: "+=40",
					left: "-=40"
				}
			)
		}
	})

	$('[acao-direita]').on('click', function(){
		$('#conteudo').animate(
			{
				left: "+=40",
				right: "-=40"
			}
		)
	})

	$('[acao-esquerda]').on('click', function(){
		$('#conteudo').animate(
			{
				right: "+=40",
				left: "-=40"
			}
		)
	})

	$('#conteudo').on('click', function(){
		$('#conteudo').animate(
			//{width:600},
			//{width:'100%'},
			{
				right: 20,
				bottom: 20,
				padding: "+=50",// "-=30"
				opacity: 0.2
			},
			1000,
			callback
		)
	})

})