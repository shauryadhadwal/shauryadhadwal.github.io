$(window).scroll(function(){var t=$(this).scrollTop();$("#intro-name").css("transform","translate(-"+t/10+"%, -50%)"),$("#intro-programmer").css("transform","translate("+t/50+"%,-50%)"),$("#intro-summary").css("transform","translate(0,-"+t/2+"%)"),$("#intro .intro-bg-split--left").css("transform","translateY(-"+t/5+"%)"),$("#intro .intro-bg-split--right").css("transform","translateY("+t/5+"%)");var r=$("#about").offset().top;r-t<0&&$("#about .img-container").css("transform","translate("+(r-t)/40+"%, -50%)");var s=$("#technologies").offset().top;s-t<0&&$("#technologies .img-container").css("transform","translate("+(s-t)/40+"%, -50%)")}),$("#about").mousemove(function(t){});