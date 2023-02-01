

$(window).resize(function(){
	if ($(window).width() > 768){
		$('.slogan-text').css({
			position:'absolute',
			top: ($(window).height() - $('.slogan-text').outerHeight())/2
		});
	}
});