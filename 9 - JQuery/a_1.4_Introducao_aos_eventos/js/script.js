/*
		$('h1').dblclick(function(){
			$('h1').addClass('destaque')
		})*/
		function executar(e){
			//$('h1').addClass('destaque')
			//$('h2').toggle()
			//evento.off()
			//$('[acao-clique]').off('click', executar)
			//$('[acao-clique]').off()
			//console.log(e.type)
			//console.log(e.target)
			//console.log(e.clientY, e.pageY)
			console.log(e.clientX, e.pageX)
		}

		//$('[acao-clique]').on('click mouseout', executar)
		$('[acao-clique]').on('click', executar)