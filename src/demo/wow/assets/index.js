$(function(){
	//加载动画
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		new WOW().init();
	};
	//banner轮播图
	var bannerSwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    lazyLoading : true,
	    autoplay:4000
  	});
  	//元素滚动置顶
  	$(".nav").scrollFix({
  		zIndex : 999,
  		endPos:-9999
  	});
  	//新闻中心轮播图
  	var newsSwiper = new Swiper ('.swiper-container2', {
	    loop: true,
	    autoplay:5000,
	    width:560,
	    height:350,
	    onSlideChangeEnd: function(swiper){
	      	$(".swiper-container2 .mask").removeClass("fadeOutDown").addClass("fadeInUp");
	      	setTimeout(function(){
	      		$(".swiper-container2 .mask").removeClass("fadeInUp").addClass("fadeOutDown");
	      		
	      	},4000);
	    }
  	});
});
