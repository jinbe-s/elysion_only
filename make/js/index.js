import '../css/index.scss';

$(function(){
	$('.master').on('click', function(){
		$(this).next('.hidden').slideToggle();
	});
});
