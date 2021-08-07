(function(){
	'use strict';

	if(jQuery('#phioa_likes').length <= 0) // 检查当前页面是否有#phioa_likes标签
		return;
	
	let likeReady = false; // 这个变量用于标记当前页面点赞数获取是否已经完成
	
	// 获取当前页面点赞数
	jQuery.getJSON(
		"https://www.phioa.xyz:8443/url_likes/getLikes.php", // 后端部分做成了开放api接口的形式
		{url: GetUrl()}, 
		function(result){
			console.log(result);
			/* 如果有报错的话，也可以在mush的mushmario.github.io仓库提交issue噢）
			 * https://github.com/mushMario/mushMario.github.io/issues
			 */
			if(result.success){ // 返回json后，在确保dom加载完成时进行进一步操作
				jQuery(function(){
					jQuery('#phioa_likes-count').text(function(){
						return result.data.likedTimes;
					});
					// 非常笨笨的css操作
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
					
					likeReady = true;
					jQuery('#phioa_likes').css('display', 'inline');
				});
			}
		}	
	);
	
	// 用户点赞操作部分
	jQuery('#phioa_likes').click(function(){
		if(likeReady){ // 禁止用户在点赞数获取完成前就试图点赞（虽然貌似更改display属性也可以实现这一点
			// 依旧还是非常笨笨的css操作
			if(jQuery('#phioa_likes-icon').hasClass('beforelike')){
				jQuery('#phioa_likes-icon').removeClass('beforelike');
				jQuery('#phioa_likes-icon').addClass('afterlike');
				jQuery('#phioa_likes-count').text(function(){return parseInt(jQuery('#phioa_likes-count').text())+1;});
			} else {
				jQuery('#phioa_likes-icon').removeClass('afterlike');
				jQuery('#phioa_likes-icon').addClass('beforelike');
				jQuery('#phioa_likes-count').text(function(){return parseInt(jQuery('#phioa_likes-count').text())-1;});
			}
			// ajax部分
			jQuery.getJSON(
				"https://www.phioa.xyz:8443/url_likes/like.php", 
				{url: GetUrl()},
				function(result){
					console.log(result); 
					/* 如果有报错的话，也可以在mush的mushmario.github.io仓库提交issue噢）
					 * https://github.com/mushMario/mushMario.github.io/issues
					 */
				}	
			);
		}
	});
})();

function GetUrl(){
	let url = window.location.host + window.location.pathname;
	url = url.substring(0, url.lastIndexOf('/') + 1);
	return url;
}