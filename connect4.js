$(document).ready(function(){
	var zoom 
	if (window.innerWidth < window.innerHeight) {
		zoom = (window.innerWidth * 90 / 1280) + '%';
	} else {
		zoom = (window.innerHeight * 85 / 683) + '%';
	}
	$('body').css('zoom', zoom);
	
	var player1 = 'Player1';
	var player2 = 'Player2';
	
	var url1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Red-circle.svg/1024px-Red-circle.svg.png'
	var url2 = 'http://vignette4.wikia.nocookie.net/inciclopedia/images/a/a5/X.png/revision/latest?cb=20091125204252'
	
	var turn = 3;
	
	function url() {
		if (turn % 2 == 1) {
			return url1;
		} else {
			return url2;
		}
	}
	
	function player() {
		if (turn % 2 == 1) {
			return player1;
		} else {
			return player2;
		}
	}
	
	$('td').data('empty', true);
	$('.column').attr('src', url());
	
/*---------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------|PRECONFIG|------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------v---------v----------------------------------------------------------------------------------------------------------------------*/
	
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
		update();
	});
		
	$('#i2').click(function(){
		url2 = prompt ('Paste the image url here');
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
			update();
	}
	
	function update() {
		$('.column').attr('src', url());
		$('.' + player1 + '>img').attr('src', url1);
		$('.' + player2 + '>img').attr('src', url2);
	}
	
/*---------------------------------------------------------------^---------^-------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------|PRECONFIG|------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------*/
	
	$('tr').hover(function(){
		switch ($(this).attr('id')){
			case 'r1':
				$('#c1').css('display', 'block');
				break;
			case 'r2':
				$('#c2').css('display', 'block');
				break;
			case 'r3':
				$('#c3').css('display', 'block');
				break;
			case 'r4':
				$('#c4').css('display', 'block');
				break;
			case 'r5':
				$('#c5').css('display', 'block');
				break;
			case 'r6':
				$('#c6').css('display', 'block');
				break;
			case 'r7':
				$('#c7').css('display', 'block');
	}}, function(){
		switch ($(this).attr('id')){
			case 'r1':
				$('#c1').css('display', 'none');
				break;
			case 'r2':
				$('#c2').css('display', 'none');
				break;
			case 'r3':
				$('#c3').css('display', 'none');
				break;
			case 'r4':
				$('#c4').css('display', 'none');
				break;
			case 'r5':
				$('#c5').css('display', 'none');
				break;
			case 'r6':
				$('#c6').css('display', 'none');
				break;
			case 'r7':
				$('#c7').css('display', 'none');
				break;
	}});
	
	var yes = true;
	var prove = 1;

	$('tr').click(function(){
		yes = true;
		while (yes == true) {
		var td = '#' + $(this).attr('id') + '> td:nth-child(' + prove + ')';
		if ($(td).data('empty') != true){
			prove +=1;
		} else {
			yes = false;
			$(td).append('<img class="move" src="' + url() + '"/>');
			$(td).data('empty', player());
			$(td).addClass(player());
			comprovar($(this).attr('id')[1], td);
		}}
	});
	
	function comprovar(id, td){
		var fid = parseFloat(id);
		var pro = parseFloat(prove);
		
		var h12 = '#r' + (fid + 1) + '>td:nth-child(' + prove +')'; var h13 = '#r' + (fid + 2) + '>td:nth-child(' + prove +')'; var h14 = '#r' + (fid + 3) + '>td:nth-child(' + prove +')';
		var h21 = '#r' + (fid - 1) + '>td:nth-child(' + prove +')'; var h23 = '#r' + (fid + 1) + '>td:nth-child(' + prove +')'; var h24 = '#r' + (fid + 2) + '>td:nth-child(' + prove +')';
		var h31 = '#r' + (fid - 2) + '>td:nth-child(' + prove +')'; var h32 = '#r' + (fid - 1) + '>td:nth-child(' + prove +')'; var h34 = '#r' + (fid + 1) + '>td:nth-child(' + prove +')';
		var h41 = '#r' + (fid - 3) + '>td:nth-child(' + prove +')'; var h42 = '#r' + (fid - 2) + '>td:nth-child(' + prove +')'; var h43 = '#r' + (fid - 1) + '>td:nth-child(' + prove +')';
		
		var v41 = '#r' + id + '>td:nth-child(' + (pro - 3) +')'; var v42 = '#r' + id + '>td:nth-child(' + (pro - 2) +')'; var v43 = '#r' + id + '>td:nth-child(' + (pro - 1) +')';
		
		var dd12 = '#r' + (fid + 1) + '>td:nth-child(' + (pro - 1) + ')'; var dd13 = '#r' + (fid + 2) + '>td:nth-child(' + (pro - 2) + ')'; var dd14 = '#r' + (fid + 3) + '>td:nth-child(' + (pro - 3) + ')';
		var dd21 = '#r' + (fid - 1) + '>td:nth-child(' + (pro + 1) + ')'; var dd23 = '#r' + (fid + 1) + '>td:nth-child(' + (pro - 1) + ')'; var dd24 = '#r' + (fid + 2) + '>td:nth-child(' + (pro - 2) + ')';
		var dd31 = '#r' + (fid - 2) + '>td:nth-child(' + (pro + 2) + ')'; var dd32 = '#r' + (fid - 1) + '>td:nth-child(' + (pro + 1) + ')'; var dd34 = '#r' + (fid + 1) + '>td:nth-child(' + (pro - 1) + ')';
		var dd41 = '#r' + (fid - 3) + '>td:nth-child(' + (pro + 3) + ')'; var dd42 = '#r' + (fid + 2) + '>td:nth-child(' + (pro - 2) + ')'; var dd43 = '#r' + (fid + 1) + '>td:nth-child(' + (pro - 1) + ')';
		
		var du12 = '#r' + (fid + 1) + '>td:nth-child(' + (pro + 1) + ')'; var du13 = '#r' + (fid + 2) + '>td:nth-child(' + (pro + 2) + ')'; var du14 = '#r' + (fid + 3) + '>td:nth-child(' + (pro + 3) + ')';
		var du21 = '#r' + (fid - 1) + '>td:nth-child(' + (pro - 1) + ')'; var du23 = '#r' + (fid + 1) + '>td:nth-child(' + (pro + 1) + ')'; var du24 = '#r' + (fid + 2) + '>td:nth-child(' + (pro + 2) + ')';
		var du31 = '#r' + (fid - 2) + '>td:nth-child(' + (pro - 2) + ')'; var du32 = '#r' + (fid - 1) + '>td:nth-child(' + (pro - 1) + ')'; var du34 = '#r' + (fid + 1) + '>td:nth-child(' + (pro + 1) + ')';
		var du41 = '#r' + (fid - 3) + '>td:nth-child(' + (pro - 3) + ')'; var du42 = '#r' + (fid - 2) + '>td:nth-child(' + (pro - 2) + ')'; var du43 = '#r' + (fid - 1) + '>td:nth-child(' + (pro - 1) + ')';
		
		
		if ( $(td).data('empty') == $(h12).data('empty') && $(td).data('empty') == $(h13).data('empty') && $(td).data('empty') == $(h14).data('empty') ) {win(td, h12, h13, h14)}
		else if ( $(td).data('empty') == $(h21).data('empty') && $(td).data('empty') == $(h23).data('empty') && $(td).data('empty') == $(h24).data('empty') ) {win(td, h21, h23, h24)}
		else if ( $(td).data('empty') == $(h31).data('empty') && $(td).data('empty') == $(h32).data('empty') && $(td).data('empty') == $(h34).data('empty') ) {win(td, h31, h32, h34)}
		else if ( $(td).data('empty') == $(h41).data('empty') && $(td).data('empty') == $(h42).data('empty') && $(td).data('empty') == $(h43).data('empty') ) {win(td, h41, h42, h43)}
		
		else if ( $(td).data('empty') == $(v41).data('empty') && $(td).data('empty') == $(v42).data('empty') && $(td).data('empty') == $(v43).data('empty') ) {win(td, v41, v42, v43)}
		
		else if ( $(td).data('empty') == $(dd12).data('empty') && $(td).data('empty') == $(dd13).data('empty') && $(td).data('empty') == $(dd14).data('empty') ) {win(td, dd12, dd13, dd14)}
		else if ( $(td).data('empty') == $(dd21).data('empty') && $(td).data('empty') == $(dd23).data('empty') && $(td).data('empty') == $(dd24).data('empty') ) {win(td, dd21, dd23, dd24)}
		else if ( $(td).data('empty') == $(dd31).data('empty') && $(td).data('empty') == $(dd32).data('empty') && $(td).data('empty') == $(dd34).data('empty') ) {win(td, dd31, dd32, dd34)}
		else if ( $(td).data('empty') == $(dd41).data('empty') && $(td).data('empty') == $(dd42).data('empty') && $(td).data('empty') == $(dd43).data('empty') ) {win(td, dd41, dd42, dd43)}
	
		else if ( $(td).data('empty') == $(du12).data('empty') && $(td).data('empty') == $(du13).data('empty') && $(td).data('empty') == $(du14).data('empty') ) {win(td, du12, du13, du14)}
		else if ( $(td).data('empty') == $(du21).data('empty') && $(td).data('empty') == $(du23).data('empty') && $(td).data('empty') == $(du24).data('empty') ) {win(td, du21, du23, du24)}
		else if ( $(td).data('empty') == $(du31).data('empty') && $(td).data('empty') == $(du32).data('empty') && $(td).data('empty') == $(du34).data('empty') ) {win(td, du31, du32, du34)}
		else if ( $(td).data('empty') == $(du41).data('empty') && $(td).data('empty') == $(du42).data('empty') && $(td).data('empty') == $(du43).data('empty') ) {win(td, du41, du42, du43)}
		
		else {turn += 1; prove = 1; $('.column').attr('src', url());}
	}
	
	function win(td, td1, td2, td3){
		$('body').delay(500).animate({'stupid': 'trick'}, '0', function(){
			$(td +', '+ td1 +', '+ td2 +', '+ td3).prepend('<img class="cross" src="http://static.comicvine.com/uploads/original/11/110697/3625199-0745809454-600px.png"/>');
		});
		$('body').delay(500).animate({'haja': 'jajajk'}, 'slow', function(){
			alert (player() + ' wins!\nClick OK to restart the game'); 
			location.reload();
		});
		
		
	}
	
	$('#load').remove();
});
