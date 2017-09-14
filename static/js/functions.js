$(document).ready(function(){ 
	$('#lang span').click(function() {
		$('#lang ul').toggle();
	}, function() {
		$('#lang ul').toggle();
	});

	$('#menu img').click(function() {
		$('#nav_top ul#').toggle();
	}, function() {
		$('#nav_top ul').toggle();
	});

	$('.lupa img').click(function() {
		if($("#search input").hasClass('active')) {
			$('#search input').animate({width: '0px'}, 300).fadeOut(100).removeClass('active');
		} else {
			$('#search input').fadeIn(100).animate({width: '180px'}, 300).addClass('active');
		}
	});
	$('.rwdMenuIcon').click(function() {
		$('#ulRwd').toggle();

	}, function() {
		$('#ulRwd').toggle();
	});
});
$(document).ready(function(){ 
	$('#lang span').click(function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
	});
});