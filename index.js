$(document).ready(function(){
	var zoom 
	function zoom(x){
		if (window.innerWidth < window.innerHeight) {
			zoom = (window.innerWidth * x / 1280) + '%';
		} else {
			zoom = (window.innerHeight * x / 683) + '%';
		}
	$('body').css('zoom', zoom);
	} 
	
	if (window.innerWidth > 1000) {
		$('#contenidor').css('width', '750px');
		zoom(100);
	} else {
		$('#contenidor').css('width', '250px');
		$('button') .css('zoom', '200%');
		zoom(200);
	}
	
	
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
