jQuery(function(){
	jQuery('img').on('error', function(){
		jQuery(this).unbind('error');
		jQuery(this).attr('src', '/img/404.png');
	});
});