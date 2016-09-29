$(document).ready(function(){
	var p1 = 1;
	var p2 = 1;
	
	var o1 = 0;
	var o2 = 0;
	
	var turn = 1;
	
	var x;
	var y;
	var d;
	
	var player1 = 'Player1';
	var player2 = 'Player2';
	
	function player(i) {
		if (turn != 1) {
			return player1;
		} else {
			return player2;
		}
	}
	
	var l2 = '240px'; var b2 = '75px';
	var l3 = '300px'; var b3 = '75px';
	var l4 = '350px'; var b4 = '75px';
	var l5 = '410px'; var b5 = '75px';
	var l6 = '460px'; var b6 = '75px';
	var l7 = '510px'; var b7 = '75px';
	var l8 = '550px'; var b8 = '75px';
	
	
	function l(trn) {
		switch (trn) {
			case 1: return '40px'; break; case 2: return l2; break; case 3: return l3; break; case 4: return l4; break; case 5: return l5; break; case 6: return l6; break; case 7: return l7; break; case 8: return l8; break;
			case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: return '570px';  break;
			case 19: return '550px'; break; case 20: return '510px'; break; case 21: return '460px'; break; case 22: return '410px'; break; case 23: return '350px'; break; case 24: return '295px'; break; case 25: return '240px'; break; case 26: return '190px'; break; case 27: return '140px'; break; case 28: return '95px'; break;
			case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36: return '70px'; break;
			case 37: return '95px'; break; case 38: return '140px'; break; case 39: return '190px'; break; case 40: return '235px'; break; case 41: return '295px'; break; case 42: return '350px'; break; case 43: return '400px'; break; case 44: return '440px'; break; 
			case 45: case 46: case 47: case 48: case 49: case 50: return '460px';
			case 51: return '440px'; break; case 52: return '400px'; break; case 53: return '350px'; break; case 54: return '300px'; break; case 55: return '250px'; break; case 56: return '205px'; break;
			case 57: case 58: case 59: case 60: return '175px'; break;
			case 61: return '205px'; break; case 62: return '250px'; break; case 63: default: return '325px'; break;
		}
	}
	
	function b(trn) {
		switch (trn) {
			case 1: return '75px'; break; case 2: return b2; break; case 3: return b3; break; case 4: return b4; break; case 5: return b5; break; case 6: return b6; break; case 7: return b7; break; case 8: return b8; break;
			case 9: return '90px'; break; case 10: return '140px'; break; case 11: return '190px'; break; case 12: return '240px'; break; case 13: return '290px'; case 14: return '350px'; break; case 15: return '400px'; break; case 16: return '460px'; break; case 17: return '505px'; break; case 18: return '545px'; break;
			case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: return '575px'; break;
			case 29: return '550px'; break; case 30: return '505px'; break; case 31: return '460px'; break; case 32: return '400px'; break; case 33: return '350px'; break; case 34: return '300px'; break; case 35: return '245px'; break; case 36: return '200px'; break;
			case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: return '180px'; break;
			case 45: return '210px'; break; case 46: return '250px'; break; case 47: return '300px'; break; case 48: return '345px'; break; case 49: return '395px'; break; case 50: return '430px'; break;
			case 51: case 52: case 53: case 54: case 55: case 56: return '465px'; break;
			case 57: return '445px'; break; case 58: return '400px'; break; case 59: return '350px'; break; case 60: return '310px'; break;
			case 61: case 62: return '285px'; break; case 63: default: return '325px'; alert(p1 + ' ' + p2); break;
		}
	}
	
	function comprovar(p, o) {
		switch (p) {
			case 19: y = 1; break;
			case 31: y = 2; break;
			case 52: y = 3; break;
			default: y = o; break;
		}
		switch (p) {
			case 5: x = 9; break;
			case 6: x = 12; break;
			case 9: x = 14; break;
			case 12: x = 6; break;
			case 14: x = 18; break;
			case 18: x = 23; break;
			case 23: x = 27; break;
			case 26: x = 53; break;
			case 27: x = 32; break;
			case 32: x = 36; break;
			case 36: x = 41; break;
			case 41: x = 45; break;
			case 42: x = 30; break;
			case 45: x = 50; break;
			case 50: x = 54; break;
			case 53: x = 26; break;
			case 54: x = 59; break;
			case 58: x = 1; break;
			case 59: x = 63; break;
			default: x = p; break;
		}

		
		if (p > 63) {
			d = p - 63;
			x = 63 - d;
			alert(p);
		}
		
		if (turn == 2) {
			if (p != x) {
				p1 = x;
				$('#img1').delay(400).animate({left: l(p1), bottom: b(p1)});
				turn = 1;
			} else if (o1 != y) {
				o1 = y;
				$('body').delay(3500).animate({'jeje': 'jaja'}, function(){
					alert('Oh! ' + player1 + ' has to remain ' + o1 + ' turn(s) here.');
				});
			} else {
				return;
			}
		} else {
			if (p != x) {
				p2 = x;
				$('#img2').delay(400).animate({left: l(p2), bottom: b(p2)});
				turn = 2;
			} else if (o2 != y) {
				o2 = y;
				$('body').delay(3500).animate({'jeje': 'jaja'}, function(){
					alert('Oh! ' + player2 + ' has to remain ' + o2 + ' turn(s) here.');
				});
			}else {
				return;
			}
		}
	}
	
	function translate() {
		if ((p2 > 8 && p2 < 19) || (p2 > 44 && p2 < 51)) {
			return 'translate( 50px, 0px)';
		} else if ((p2 > 18 && p2 < 29) || (p2 > 50 && p2 < 57)) {
			return 'translate( 0px, -50px)';
		} else if ((p2 > 28 && p2 < 37) || (p2 > 56 && p2 < 61)) {
			return 'translate( -50px, 0px)';
		} else {
			return 'translate( 0px, 50px)';
		}
	}
	
	$('.num').click(function(){
		$('.num').css({'display': 'none', 'zoom': '100%', 'right': '+=100px'});
		$('#dice').css('display', 'block');
	});
	
	$('#dice').click(function() {
		var random = Math.ceil(Math.random() * 6);
		$('#num').html(random);
		$('#dice').effect('shake', {times: 15} , 1000);
		$('#dice').effect('shake', {direction: 'up', times: 15}, 1000);
		$('#dice').effect('explode', {pieces: 36}, 1000);
		$('#num').delay(2500).fadeIn();
		$('.num').animate({'zoom': '300%', 'right': '-=100px'});
		if (turn == 1) {
			if ((o1 == 1 || o1 == 2) || (o1 == 3)){
				$('#nope').delay(2500).fadeIn(400, function() {
					alert (player1 + ' can not move.\nTurns remaining: ' + o1 + '.');
					o1--;
				});
				turn = 2;
			} else {
				p1 += random;
				$('#img1').delay(3500).animate({left: l(p1), bottom: b(p1)});
				turn = 2;
				comprovar(p1, o1);
			}
		} else {
			if ((o2 == 1 || o2 == 2) || (o2 == 3)){
				$('#nope').delay(2500).fadeIn(400, function() {
					alert (player2 + ' can not move.\nTurns remaining: ' + o2 + '.');
					o2--;
				});
				turn = 1;
			} else {
				p2 += random;
				$('#img2').delay(3500).animate({left: l(p2), bottom: b(p2)});
				turn = 1;
				comprovar(p2, o2);
			}
		}
		
		if (p1 == p2) {
			$('body').delay(3000).animate({'jeje': 'juju'}, function(){$('#img2').css('transform', translate());});
		} else {
			$('body').delay(3000).animate({'jeje': 'juju'}, function(){$('#img2').css('transform', 'translate( 0px, 0px)');});
		}
		
		if (p1 == 63 || p2 == 63) {
			$('body').delay(3500).animate({'jeje':'juju'}, function(){
			alert (player() + ' has won!\nClick Ok to restart the game.');
			location.reload();});
		}
	});
	
	
});
