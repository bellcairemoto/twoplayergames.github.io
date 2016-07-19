$(document).ready(function(){
	var zoom 
	if (window.innerWidth < window.innerHeight) {
		zoom = (window.innerWidth * 100 / 1280) + '%';
	} else {
		zoom = (window.innerHeight * 100 / 683) + '%';
	}
	$('body').css('zoom', zoom);
	
	$('#memory').click(function(){
		$('#dmemory').fadeIn();
	});
	
	$('#tictactoe').click(function(){
		$('#dtictactoe').fadeIn();
	});
	
	$('#fingers').click(function(){
		$('#dfingers').fadeIn();
	});
	
	$('#connect4').click(function(){
		$('#dconnect4').fadeIn();
	});
	
	$('.close').click(function(){
		$('#dfingers').fadeOut();
		$('#dtictactoe').fadeOut();
		$('#dmemory').fadeOut();
		$('#dconnect4').fadeOut();
	});
});
