$(document).ready(function(){
	var zoom 
	if (window.innerWidth < (window.innerHeight * 2)) {
		zoom = (window.innerWidth * 100 / 1280) + '%';
	} else {
		zoom = (window.innerHeight * 100 / 683) + '%';
	}
	$('body').css('zoom', zoom);
	
	
	var back = 'http://www.magicbravo.es/WebRoot/Store/Shops/magicbravo/4C78/A38C/0123/5F76/6BAB/55EE/0960/4C62/CARTA_JUMBO_BICYCLE_52_EN_1_DORSO_AZUL_-_DORSO.jpg'
	var banana = 'http://www.dibujosmania.com/imagenes/0-imagenes-frutas-g.jpg'
	var poma = 'http://cdn5.dibujos.net/dibujos/pintados/201243/manzana-grande-comida-frutas-pintado-por-yuridiacj-9777709.jpg'
	var raim = 'http://cdn5.dibujos.net/dibujos/pintados/201518/mora-comida-frutas-9941382.jpg'
	var llima = 'http://cdn5.dibujos.net/dibujos/pintados/201303/limon-comida-frutas-pintado-por-hiikari-9797069.jpg'
	var pomes = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQubI17wktHL_pGwUz2bNeWWrv4xPbbjQ6zGYHkhzsevwr34HC7Lg'
	var cireres = 'http://2.bp.blogspot.com/_nNdx_9yMf2M/TAcWvImQVXI/AAAAAAAAALI/21b2UEBj05I/s1600/cereza+2.jpg'
	var sindria = 'http://2.bp.blogspot.com/-7_Nmhcgoa64/UpNwvweteGI/AAAAAAABHbg/yN-UEKt8yiI/s1600/Rodaja+de+sandia+color+(2).png'
	var kiwi = 'http://cdn5.dibujos.net/dibujos/pintados/201517/un-kiwi-comida-frutas-9938535.jpg'
	
	var player1 = 'Circle';
	var player2 = 'Cross';
	
	var url1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Red-circle.svg/1024px-Red-circle.svg.png'
	var url2 = 'http://vignette4.wikia.nocookie.net/inciclopedia/images/a/a5/X.png/revision/latest?cb=20091125204252'
	
	var col = ' #f44336';
	
	var click = 1;
	var turn = 1;
	
	var card1 = 0;
	var card2 = 0;
	
	update();
	
	var n1 = {'left': '10px', 'top': '0px'};
	var n2 = {'left': '120px', 'top': '0px'};
	var n3 = {'left': '230px', 'top': '0px'};
	var n4 = {'left': '340px', 'top': '0px'};
	
	var n5 = {'left': '10px', 'top': '170px'};
	var n6 = {'left': '120px', 'top': '170px'};
	var n7 = {'left': '230px', 'top': '170px'};
	var n8 = {'left': '340px', 'top': '170px'};
	
	var n9 = {'left': '10px', 'top': '340px'};
	var n10 = {'left': '120px', 'top': '340px'};
	var n11 = {'left': '230px', 'top': '340px'};
	var n12 = {'left': '340px', 'top': '340px'};
	
	var n13 = {'left': '10px', 'top': '510px'};
	var n14 = {'left': '120px', 'top': '510px'};
	var n15 = {'left': '230px', 'top': '510px'};
	var n16 = {'left': '340px', 'top': '510px'};
	
	
		/*var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
		var ranNums = [];
		var i = 15;
		var j = 0;
		var x = 1;
		
		function random() {
			j = Math.floor(Math.random() * i);
			ranNums.push(nums[j]);
			nums.splice(0,j);
			i--
			return ranNums[ranNums.length - 1]
			alert(ranNums[ranNums.length - 1]);
		}*/
		
		var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
		nums.sort(function(a, b){return 0.5 - Math.random()}); 
		
		function name(n) {
			switch (n){
				case 1:
					return n1;
					break;
				case 2:
					return n2;
					break;
				case 3:
					return n3;
					break;
				case 4:
					return n4;
					break;
				case 5:
					return n5;
					break;
				case 6:
					return n6;
					break;
				case 7:
					return n7;
					break;
				case 8:
					return n8;
					break;
				case 9:
					return n9;
					break;
				case 10:
					return n10;
					break;
				case 11:
					return n11;
					break;
				case 12:
					return n12;
					break;
				case 13:
					return n13;
					break;
				case 14:
					return n14;
					break;
				case 15:
					return n15;
					break;
				case 16:
					return n16;
					break;
			}
		}
		
	$('#n1').css(name(nums[0]));
	$('#n2').css(name(nums[1]));
	$('#n3').css(name(nums[2]));
	$('#n4').css(name(nums[3]));
	$('#n5').css(name(nums[4]));
	$('#n6').css(name(nums[5]));
	$('#n7').css(name(nums[6]));
	$('#n8').css(name(nums[7]));
	$('#n9').css(name(nums[8]));
	$('#n10').css(name(nums[9]));
	$('#n11').css(name(nums[10]));
	$('#n12').css(name(nums[11]));
	$('#n13').css(name(nums[12]));
	$('#n14').css(name(nums[13]));
	$('#n15').css(name(nums[14]));
	$('#n16').css(name(nums[15]));
	
	function img(fruita){
		switch (fruita){
			case 'banana':
				return banana;
				break;
			case 'poma':
				return poma;
				break;
			case 'raim': 
				return raim;
				break;
			case 'llima':
				return llima;
				break;
			case 'pomes':
				return pomes;
				break;
			case 'cireres': 
				return cireres;
				break;
			case 'sindria':
				return sindria;
				break;
			case 'kiwi':
				return kiwi;
				break;
		}
	}
	
	$('#all > img').hover(function(){
		if ($(this).attr('src') == back) {
			$(this).css({'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2)', 'box-shadow': '0 6px 20px 0 rgba(0, 0, 0, 0.19)'})
		}
	}, function(){
		$(this).css('box-shadow', 'none');
	});

	function win(classe){
		$('body').delay('400').animate({'jakak': 'haan'}, 'fast', function() {alert('Very Well!')});
		classe.attr('src', back);
		
		if (turn == 1) {
			classe.animate({'left': '-100px', 'top': '20px', 'width': '30px', 'height': 'auto'});
			card1 += 1;
			$('#card1').html(card1);
		} else {
			classe.animate({'left': '520px', 'top': '20px', 'width': '30px', 'height': 'auto'});
			card2 += 1;
			$('#card2').html(card2);
		}
		
		if (card1 + card2 == 8) {
			if (card1 > card2) {
				alert (player1 + ' wins!\nClick Ok to reload the game.');
				location.reload();
			} else if (card1 == card2){
				alert('DRAW!\Click Ok to reload the game.');
				location.reload();
			} else {
				alert (player2 + ' wins!\nClick Ok to reload the game.');
				location.reload();
			}
		} else {
			$('#all > img').data('clicked', false);
			click = 1;
		}
	}
	
	function color () {
		if (turn == 2) {
			$('#player1').css('background-color', '#52616D');
			$('#player2').css('background-color', col);
			$('#player2 > img').css('border', '2px solid ' + col);
			$('#player1 > img').css('border', '2px solid #52616D');
		} else {
			$('#player2').css('background-color', '#52616D');
			$('#player1').css('background-color', col);
			$('#player1 > img').css('border', '2px solid ' + col);
			$('#player2 > img').css('border', '2px solid #52616D');
		}
	}
	
	function nope() {
		if (turn == 1) {turn = 2;} 
		else {turn = 1;}
		
		color()
		$('#all > img').attr('src', back); 
		$('#all > img').data('clicked', false); 
		click = 1;
	}
	
	$('#all > img').click(function(){
		if ($(this).attr('src') == back) {
		$(this).attr('src', img($(this).attr('class')));
		$(this).data('clicked', true);
		
		if (click == 1){
			click = 2;
		} else {
			if ($('#n1').data('clicked') == true && $('#n9').data('clicked') == true) {win($('.banana'))}
			else if ($('#n2').data('clicked') == true && $('#n10').data('clicked') == true) {win($('.poma'))}
			else if ($('#n3').data('clicked') == true && $('#n11').data('clicked') == true) {win($('.raim'))}
			else if ($('#n4').data('clicked') == true && $('#n12').data('clicked') == true) {win($('.llima'))}
			else if ($('#n5').data('clicked') == true && $('#n13').data('clicked') == true) {win($('.pomes'))}
			else if ($('#n6').data('clicked') == true && $('#n14').data('clicked') == true) {win($('.cireres'))}
			else if ($('#n7').data('clicked') == true && $('#n15').data('clicked') == true) {win($('.sindria'))}
			else if ($('#n8').data('clicked') == true && $('#n16').data('clicked') == true) {win($('.kiwi'))}
			else {nope();}
		}
		}
	});

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------PRECONFIG--------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

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
	
	function update() {
		$('#player1 > h1').html(player1);
		$('#player2 > h1').html(player2);
		$('#player1 > img').attr('src', url1);
		$('#player2 > img').attr('src', url2);
		if (turn == 1){
			$('#player1').css('background-color', col);
			$('#player1 > img').css('border', '2px solid ' + col);
			$('#player2').css('background-color', '#52616D');
			$('#player2 > img').css('border', '2px solid ' + '#52616D');
		} else {
			$('#player2').css('background-color', col);
			$('#player2 > img').css('border', '2px solid ' + col);
			$('#player1').css('background-color', '#52616D');
			$('#player1 > img').css('border', '2px solid ' + '#52616D');
		}
	}
	
	$('#na1').click(function(){
		player1 = prompt ('What\'s your name?');
		update();
	});
		
	$('#na2').click(function(){
		player2 = prompt ('What\'s your name?');
		update();
	});
		
	$('#i1').click(function(){
		url1 = prompt ('Paste the image url here');
		update();
	});
		
	$('#i2').click(function(){
		url2 = prompt ('Paste the image url here');
		update();
	}); 
	
	$('#col').click(function(){
		col = prompt ('Write your color. \nIt can be a word (red), a rgb code or an hex code (#).'); 
		update();
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
			update();
	}
});
