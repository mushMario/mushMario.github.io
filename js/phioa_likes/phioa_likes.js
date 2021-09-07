(function(){
	'use strict';

	if(jQuery('.phioa_likes').length <= 0) // 检查当前页面是否有.phioa_likes标签
		return;
	
	let likeReady = false; // 这个变量用于标记当前页面点赞数获取是否已经完成
        let likeCount = 0; //这个变量用于记录（本地的）点赞数
	
	// 获取当前页面点赞数
	jQuery.getJSON(
		"https://www.phioa.xyz:8443/url_likes/getLikes.php", // 后端部分做成了开放api接口的形式
		{url: getUrl()}, 
		function(result){
			console.log(result);
			/**
			 * 如果有报错的话，也可以在mush的mushmario.github.io仓库提交issue噢）
			 * https://github.com/mushMario/mushMario.github.io/issues
			 */
			if(result.success){ // 返回json后，在确保dom加载完成时进行进一步操作
				jQuery(function(){
                                        likeCount = result.data.likedTimes;
					jQuery('.phioa_likes-count').text(function(){
						return likeCount.toString();
					});
					toggleSelectedCssClass(result.data.hasLiked);
					likeReady = true;
					jQuery('.phioa_likes').css('display', 'inline');
				});
			}
		}	
	);
	
	// 用户点赞操作部分
	jQuery('.phioa_likes').click(function(){
		if(likeReady){ // 禁止用户在点赞数获取完成前就试图点赞（虽然貌似更改display属性也可以实现这一点
			if(toggleSelectedCssClass()){
				likeCount++;
			} else {
				likeCount--;
			}
                        jQuery('.phioa_likes-count').text(function(){
                                return likeCount;
                        });
			// ajax部分
			jQuery.getJSON(
				"https://www.phioa.xyz:8443/url_likes/like.php", 
				{url: getUrl()},
				function(result){
					console.log(result); 
					/**
					 * 如果有报错的话，也可以在mush的mushmario.github.io仓库提交issue噢）
					 * https://github.com/mushMario/mushMario.github.io/issues
					 */
				}	
			);
		}
	});
})();

//获取当前网页url的最后目录
function getUrl(){
	let url = window.location.host + window.location.pathname;
	url = url.substring(0, url.lastIndexOf('/') + 1);
	return url;
}

// 非常笨笨的css操作
/**
 * 如果输入一个布尔值，且布尔值为真，
 * 则将css类切换为afterlike。
 * 否则切换为beforelike。
 * 若无输入，则切换当前css类
 *（若为afterlike则切换为beforelike，反之亦然）。
 * 返回一个布尔值，真代表当前css类为afterlike，假则为beforelike。
 * （我也不知道有没有更好的方式来做这个）
 */
function toggleSelectedCssClass(isLiked){
	if(isLiked == undefined){
		if(jQuery('.phioa_likes-icon').hasClass('beforelike')){
			jQuery('.phioa_likes-icon').removeClass('beforelike');
			jQuery('.phioa_likes-icon').addClass('afterlike');
			return true;
		} else {
			jQuery('.phioa_likes-icon').removeClass('afterlike');
			jQuery('.phioa_likes-icon').addClass('beforelike');
			return false;
		}
	} else if(isLiked){
		if(jQuery('.phioa_likes-icon').hasClass('beforelike')){
			jQuery('.phioa_likes-icon').removeClass('beforelike');
		}
		jQuery('.phioa_likes-icon').addClass('afterlike');
		return true;
	} else if(!isLiked){
		if(jQuery('.phioa_likes-icon').hasClass('afterlike')){
			jQuery('.phioa_likes-icon').removeClass('afterlike');
		}
		jQuery('.phioa_likes-icon').addClass('beforelike');
		return false;
	}
	return null;
}
