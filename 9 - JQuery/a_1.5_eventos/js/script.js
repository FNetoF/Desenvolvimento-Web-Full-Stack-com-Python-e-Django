/*$(document).ready(function(){
	
})

$(function(){
	$('[acao-clique]').on('click', function(){
		$('h1').addClass('destaque')
		console.log('clique')
	})
})

$(window).on('unload', function(){//load, unload
	console.log('unload')
})

$(window).on('scroll', function(){//error, resize, scroll
	console.log('scroll')
})*/
function mouseenter(e){
	console.log('mouseenter')
}

function mouseleave(e){
	console.log('mouseleave')
}

$(function(){
	$('[acao-clique]').hover(mouseenter, mouseleave)
})
