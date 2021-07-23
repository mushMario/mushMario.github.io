'use strict';

var getLikes_ajaxing = false;

function getLikes(){
	if(!getLikes_ajaxing){
		getLikes_ajaxing = true;
		jQuery.getJSON(
			"https://www.phioa.xyz:8443/url_likes/getLikes.php", 
			{url: window.location.href},
			function(result){
				if(result.success){
					jQuery('#phioa_likes-count').text(function(){
						return result.data.likedTimes;
					});
					if(result.data.hasLiked){
						if(jQuery('#phioa_likes-icon').hasClass('beforelike')){
							jQuery('#phioa_likes-icon').removeClass('beforelike');
						}
						jQuery('#phioa_likes-icon').addClass('afterlike');
					} else {
						if(jQuery('#phioa_likes-icon').hasClass('afterlike')){
							jQuery('#phioa_likes-icon').removeClass('afterlike');
						}
						jQuery('#phioa_likes-icon').addClass('beforelike');
					}
					
				}
				getLikes_ajaxing = false;
			}
		);
	}
}

jQuery(getLikes);
jQuery('#phioa_likes').click();