$(document).ready(function(){
	var zoom 
	if (window.innerWidth < window.innerHeight) {
		zoom = (window.innerWidth * 100 / 1280) + '%';
	} else {
		zoom = (window.innerHeight * 95 / 683) + '%';
	}
	$('body').css('zoom', zoom);
	
	var player1 = 'Player1'
	var player2 = 'Player2'
	
	var url1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Red-circle.svg/1024px-Red-circle.svg.png'
	var url2 = 'http://vignette4.wikia.nocookie.net/inciclopedia/images/a/a5/X.png/revision/latest?cb=20091125204252'
	
	var col = 'black'
	
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
		col = prompt ('Write hex of your color. \n Do not forget "#"'); 
		var color = '2px solid ' + col + '';
		$('.border').css('border', color);
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
			var color = '2px solid ' + col + '';
			$('.border').css('border', color);
	}
	
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
	
	
	//------------------------------------------------------------------------------------------------------------------------------
	
	
	var left1 = 1;
	var right1 = 1;
	
	var left2 = 1;
	var right2 = 1;
	
	$('#left1').click(function(){
		$('#left1').data('clicked', true);
		$(this).css('box-shadow', '0px 0px 73px 0px rgba(0,0,0,0.79)');
	});
	$('#right1').click(function(){
		$('#right1').data('clicked', true);
		$(this).css('box-shadow', '0px 0px 73px 0px rgba(0,0,0,0.79)');
	});
	
	$('#left2').click(function(){
		$('#left2').data('clicked', true);
		$(this).css('box-shadow', '0px 0px 73px 0px rgba(0,0,0,0.79)');
	});
	$('#right2').click(function(){
		$('#right2').data('clicked', true);
		$(this).css('box-shadow', '0px 0px 73px 0px rgba(0,0,0,0.79)');
	});
	
	
	function play1() {
		$('#notallowed').css('top', '410px');
		$('h1').css('color', 'blue');
		
		if($('#left1').data('clicked') == true && $('#left2').data('clicked') == true) {
			left2 = left1 + left2;
			
			if (left2 >= 5) {
				left2 = left2 - 5;
			} else {
				left2 = left2;
			}
			
			if (left2 == 0) {
				alert ('You lost one hand :(');
				$('#left2').css('display', 'none');
			} else {
				$('#left2').attr('src', left2 + 'l.png');
			}
			
			if (right2 == 0 && left2== 0) {
				alert(player2 + ' wins \nClick OK to restart');
				$('h1').html('Game Over');
				location.reload(true);
			} else {
				$('body').delay('500').animate({'haj': 'aja'}, function(){
					$('h1').html('Turn of ' + player2);
					$('#user').attr('src', url2);
					$('#all').css('transform', 'rotate(180deg)');
					$('#notallowed').css('top', '100px');
					$('#left1').data('clicked', false);
					$('#left2').data('clicked', false);
					$('*').css('box-shadow', '0px 0px 0px');
				});
			}
			return;
		}
		
		if($('#left1').data('clicked') == true && $('#right2').data('clicked') == true) {
			right2 = left1 + right2;
			
			if (right2 >= 5) {
				right2 = right2 - 5;
			} else {
				right2 = right2;
			}
			
			if (right2 == 0) {
				alert ('You lost one hand :(');
				$('#right2').css('display', 'none');
			} else {
				$('#right2').attr('src', right2 + 'r.png');
			}
			
			if (right2 == 0 && left2== 0) {
				alert(player2 + ' wins \nClick OK to restart');
				$('h1').html('Game Over');
				location.reload(true);
			} else {
				$('body').delay('500').animate({'haj': 'aja'}, function(){
					$('#all').css('transform', 'rotate(180deg)');
					$('#notallowed').css('top', '100px');
					$('#left1').data('clicked', false);
					$('#right2').data('clicked', false);
					$('h1').html('Turn of ' + player2);
					$('#user').attr('src', url2);
					$('*').css('box-shadow', '0px 0px 0px');
				});
			}
			return;
		}
		
		
		
		if($('#right1').data('clicked') == true && $('#left2').data('clicked') == true) {
			left2 = right1 + left2;
			
			if (left2 >= 5) {
				left2 = left2 - 5;
			} else {
				left2 = left2;
			}
			
			if (left2 == 0) {
				alert ('You lost one hand :(');
				$('#left2').css('display', 'none');
			} else {
				$('#left2').attr('src', left2 + 'l.png');
			}
			
			if (right2 == 0 && left2== 0) {
				alert(player2 + ' wins \nClick OK to restart');
				$('h1').html('Game Over');
				location.reload(true);
			} else {
				$('body').delay('500').animate({'haj': 'aja'}, function(){
					$('#all').css('transform', 'rotate(180deg)');
					$('#notallowed').css('top', '100px');
					$('#right1').data('clicked', false);
					$('#left2').data('clicked', false);
					$('h1').html('Turn of ' + player2);
					$('#user').attr('src', url2);
					$('*').css('box-shadow', '0px 0px 0px');
				});
			}
			return;
		}
		
		if($('#right1').data('clicked') == true && $('#right2').data('clicked') == true) {
			right2 = right1 + right2;
			
			if (right2 >= 5) {
				right2 = right2 - 5;
			} else {
				right2 = right2;
			}
			
			if (right2 == 0) {
				alert ('You lost one hand :(');
				$('#right2').css('display', 'none');
			} else {
				$('#right2').attr('src', right2 + 'r.png');
			}
			
			if (right2 == 0 && left2== 0) {
				alert(player2 + ' wins \nClick OK to restart');
				$('h1').html('Game Over');
				location.reload(true);
			} else {
				$('body').delay('500').animate({'haj': 'aja'}, function(){
					$('#all').css('transform', 'rotate(180deg)');
					$('#notallowed').css('top', '100px');
					$('#right1').data('clicked', false);
					$('#right2').data('clicked', false);
					$('h1').html('Turn of ' + player2);
					$('#user').attr('src', url2);
					$('*').css('box-shadow', '0px 0px 0px');
				});
			}
			return;
		}
		
		return;
	}
	
	
	
	
	function play2() {
		$('#notallowed').css('top', '410px');
		$('h1').css('color', 'red');
		
		if($('#left2').data('clicked') == true && $('#left1').data('clicked') == true) {
			left1 = left1 + left2;
			
			if (left1 >= 5) {
				left1 = left1 - 5;
			} else {
				left1 = left1;
			}
			
			if (left1 == 0) {
				alert ('You lost one hand :(');
				$('#left1').css('display', 'none');
			} else {
				$('#left1').attr('src', left1 + 'l.png');
			}
			
			if (right1 == 0 && left1== 0) {
				alert(player2 + ' wins \nClick OK to restart');
				$('h1').html('Game Over');
				location.reload(true);
			} else {
				$('body').delay('500').animate({'haj': 'aja'}, function(){
					$('h1').html('Turn of ' + player1);
					$('#user').attr('src', url1);
					$('#all').css('transform', 'rotate(0deg)');
					$('#notallowed').css('top', '100px');
					$('#left1').data('clicked', false);
					$('#left2').data('clicked', false);
					$('*').css('box-shadow', '0px 0px 0px');
				});
			}
			return;
		}
		
		if($('#left2').data('clicked') == true && $('#right1').data('clicked') == true) {
			right1 = left2 + right1;
			
			if (right1 >= 5) {
				right1 = right1 - 5;
			} else {
				right1 = right1;
			}
			
			if (right1 == 0) {
				alert ('You lost one hand :(');
				$('#right1').css('display', 'none');
			} else {
				$('#right1').attr('src', right1 + 'r.png');
			}
			
			if (right1 == 0 && left1== 0) {
				alert(player2 + ' wins \nClick OK to restart');
				$('h1').html('Game Over');
				location.reload(true);
			} else {
				$('body').delay('500').animate({'haj': 'aja'}, function(){
					$('#all').css('transform', 'rotate(0deg)');
					$('#notallowed').css('top', '100px');
					$('#left2').data('clicked', false);
					$('#right1').data('clicked', false);
					$('h1').html('Turn of ' + player1);
					$('#user').attr('src', url1);
					$('*').css('box-shadow', '0px 0px 0px');
				});
			}
			return;
		}
		
		
		
		if($('#right2').data('clicked') == true && $('#left1').data('clicked') == true) {
			left1 = right2 + left1;
			
			if (left1 >= 5) {
				left1 = left1 - 5;
			} else {
				left1 = left1;
			}
			
			if (left1 == 0) {
				alert ('You lost one hand :(');
				$('#left1').css('display', 'none');
			} else {
				$('#left1').attr('src', left1 + 'l.png');
			}
			
			if (right1 == 0 && left1== 0) {
				alert(player2 + ' wins \nClick OK to restart');
				$('h1').html('Game Over');
				location.reload(true);
			} else {
				$('body').delay('500').animate({'haj': 'aja'}, function(){
					$('#all').css('transform', 'rotate(0deg)');
					$('#notallowed').css('top', '100px');
					$('#right2').data('clicked', false);
					$('#left1').data('clicked', false);
					$('h1').html('Turn of ' + player1);
					$('#user').attr('src', url1);
					$('*').css('box-shadow', '0px 0px 0px');
				});
			}
			return;
		}
		
		if($('#right2').data('clicked') == true && $('#right1').data('clicked') == true) {
			right1 = right2 + right1;
			
			if (right1 >= 5) {
				right1 = right1 - 5;
			} else {
				right1 = right1;
			}
			
			if (right1 == 0) {
				alert ('You lost one hand :(');
				$('#right1').css('display', 'none');
			} else {
				$('#right1').attr('src', right1 + 'r.png');
			}
			
			if (right1 == 0 && left1== 0) {
				alert(player2 + ' wins \nClick OK to restart');
				$('h1').html('Game Over');
				location.reload(true);
			} else {
				$('body').delay('500').animate({'haj': 'aja'}, function(){
					$('#all').css('transform', 'rotate(0deg)');
					$('#notallowed').css('top', '100px');
					$('#right2').data('clicked', false);
					$('#right1').data('clicked', false);
					$('h1').html('Turn of ' + player1);
					$('#user').attr('src', url1);
					$('*').css('box-shadow', '0px 0px 0px');
				});
			}
			return;
		}
		return;
	}
	
	$('.hand').click(function(){
		if ($('h1').html() == 'Turn of ' + player2) {
			play2();
		} else if ($('h1').html() == 'Game Over'){
			alert('Reload to restart');
		} else {
			play1();
		}
	});
});
