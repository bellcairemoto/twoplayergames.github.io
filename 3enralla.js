$(document).ready(function(){
	var zoom 
	if (window.innerWidth < window.innerHeight) {
		zoom = (window.innerWidth * 100 / 1280) + '%';
	} else {
		zoom = (window.innerHeight * 100 / 683) + '%';
	}
	$('body').css('zoom', zoom);
	
    var turn = 2 
	
	var player1 = 'Player1'
	var player2 = 'Player2'
	
	var url1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Red-circle.svg/1024px-Red-circle.svg.png'
	var url2 = 'http://vignette4.wikia.nocookie.net/inciclopedia/images/a/a5/X.png/revision/latest?cb=20091125204252'
	
	var col = 'black'
	
	function result(shape, start, end){
		var first
		var last
		
		switch (start) {
			case 1:
				first = '100 100';
				break;
			case 2:
				first = '310 100';
				break;
			case 3:
				first = '520 100';
				break;
			case 4:
				first = '100 310';
				break;
			case 7: 
				first = '100 520';
				break;
			default:
				first = '0 0';
		}
		
		switch (end) {
			case 3:
				last = '520 100';
				break;
			case 6: 
				last = '520 310';
				break;
			case 7:
				last = '100 520';
				break;
			case 8:
				last = '310 520';
				break;
			case 9:
				last = '520 520';
				break;
			default: 
				last = '0 0';
		}
		
		var points = first + ', ' + last
		
		$('svg').css('display', 'block');
		$('polyline').css('stroke', col);
		$('polyline').attr('points', points);
		
		if (turn == 1) {
			alert (player1 + ' wins! \nClick OK to reload the page');
		} else {
			alert (player2 + ' wins \nClick OK to reload the page');
		}
		location.reload(false);
	}
	
	$('#settings').click(function(){
		$('#opensettings').fadeIn();
		$(this).fadeOut();
		$('#close').fadeIn();
	});
	
	$('#close').click(function(){
		$('#opensettings').fadeOut();
		$(this).fadeOut();
		$('#settings').fadeIn();
	});
	
	$('#n1').click(function(){
		player1 = prompt ('What\'s your name?');
	});
		
	$('#n2').click(function(){
		player2 = prompt ('What\'s your name?');
		});
		
	$('#i1').click(function(){
		url1 = prompt ('Paste the image url here');
	});
		
	$('#i2').click(function(){
		url2 = prompt ('Paste the image url here');
	}); 
	
	$('#col').click(function(){
		col = prompt ('Write hex of youR color. \n Do not forget "#"'); 
		var color = '5px solid ' + col + '';
		$('td').css('border', color);
	});
	
	$('.preconfig').click(function(){
		$('#openpreconfig').fadeIn();
		$('.preconfig').fadeOut();
		$('#close2').fadeIn();
		$('#opensettings').fadeOut();
		$('#close').fadeOut();
		$('#settings').fadeIn();
	});
	
	$('#close2').click(function(){
		$('#openpreconfig').fadeOut();
		$(this).fadeOut();
		$('.preconfig').fadeIn();
	});
	
	$('.getconfig').click(function(){
		$('#openpreconfig').append('<p>Your preconfiguration is:</p> <p>' + player1 + '+' + player2 + '-' + url1 + '*' + url2 + '|' + col + '·</p>');
	});
	
	$('.addconfig').click(function(){
		addconfig()
	});
	
	$('#shortcut').click(function(){
		addconfig()
	});
	
	function addconfig(){
		var config = prompt('Paste configuration');
			var p1 = config.indexOf('+')
			var p2 = config.indexOf('-')
			var p3 = config.indexOf('*')
			var p4 = config.indexOf('|')
			var end = config.indexOf('·')
			
			player1 = config.substring(0 , p1) 
			player2 = config.substring(p1 + 1, p2) 
			url1 = config.substring(p2 + 1, p3) 
			url2 = config.substring(p3 + 1, p4) 
			col = config.substring(p4 + 1, end) 
			var colour = '5px solid ' + col
			$('td').css('border', colour);
	}

	function comprovar(shape) {
		if ($('#1').attr('class') == shape && $('#2').attr('class') == shape && $('#3').attr('class') == shape) {result('cross', 1, 3);}
		else if ($('#4').attr('class') == shape && $('#5').attr('class') == shape && $('#6').attr('class') == shape) {result(shape, 4, 6);}
		else if ($('#7').attr('class') == shape && $('#8').attr('class') == shape && $('#9').attr('class') == shape) {result(shape, 7, 9);}
		else if ($('#1').attr('class') == shape && $('#5').attr('class') == shape && $('#9').attr('class') == shape) {result(shape, 1, 9);}
		else if ($('#7').attr('class') == shape && $('#5').attr('class') == shape && $('#3').attr('class') == shape) {result(shape, 7, 3);}
		else if ($('#1').attr('class') == shape && $('#4').attr('class') == shape && $('#7').attr('class') == shape) {result(shape, 1, 7);}
		else if ($('#2').attr('class') == shape && $('#5').attr('class') == shape && $('#8').attr('class') == shape) {result(shape, 2, 8);}
		else if ($('#3').attr('class') == shape && $('#6').attr('class') == shape && $('#9').attr('class') == shape) {result(shape, 3, 9);}
		else if ($('#1').data('clicked') == true && $('#2').data('clicked') == true && $('#3').data('clicked') == true && $('#4').data('clicked') == true && $('#5').data('clicked') == true && $('#6').data('clicked') == true && $('#7').data('clicked') == true && $('#8').data('clicked') == true && $('#9').data('clicked') == true) {alert ('DRAW!\nClick OK to reload the page'); location.reload();}
	}
    
    $('td').click(function(){
        if ($(this).data('clicked') == true){
            alert ('You can\'t move here');
        } else {
            if (turn == 2) {
                $(this).append('<img src="' + url1 + '">');
                $(this).data({'clicked': true});
                $(this).addClass('circle');
				turn = 1
				comprovar('circle');
				
            } else {
                $(this).append('<img src="' + url2 + '">');
                $(this).data({'clicked': true});
                $(this).addClass('cross');
				turn = 2
				comprovar('cross');
            }
        } 
    });
	
	$('#audioon').click(function(){
		audio.muted = true;
		$(this).fadeOut();
		$('#audiooff').fadeIn();
	});
	
	$('#audiooff').click(function(){
		audio.muted = false;
		$(this).fadeOut();
		$('#audioon').fadeIn();
	});
});