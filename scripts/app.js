$(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    //Move left on scroll down
    $("#intro-name").css("transform", "translate(-" + (scrollVal / 10) + "%, -50%)");

    //Move up on scroll down
    // $("#intro-programmer").css("transform", "translateY(-" + (50 + scrollVal / 10) + "%)");
    $("#intro-programmer").css("transform", "translate(" + (scrollVal / 50) + "%,-50%)");

    //Move up on scroll down
    $("#intro-summary").css("transform", "translate(0,-" + (scrollVal / 2) + "%)");

    //Move left on scroll down
    $("#intro .intro-bg-split--left").css("transform", "translateX(-" + (scrollVal / 10) + "%)");

    //Move left on scroll down
    $("#intro .intro-bg-split--right").css("transform", "translateX(" + (scrollVal / 10) + "%)");

    var aboutTop = $("#about").offset().top;
    if (aboutTop - scrollVal < 0) {
        //Move left on scroll down
        $("#about .img-container").css("transform", "translate(" + ((aboutTop - scrollVal)/40) + "%, -50%)");
        // console.log('[About]', "translateX(-" + ((aboutTop - scrollVal)/50) + "%)") ;
    }
    var technologyTop = $("#technologies").offset().top;
    if (technologyTop - scrollVal < 0) {
        //Move left on scroll down
        $("#technologies .img-container").css("transform", "translate(" + ((technologyTop - scrollVal)/40) + "%, -50%)");
        // console.log('[About]', "translateX(-" + ((aboutTop - scrollVal)/50) + "%)") ;
    }


});

$("#about").mousemove(function (e) {
    // var valueX = (e.pageX * -1 / 15);
    // var valueY = (e.pageY * -1 / 15);

    // $("#about .mouse-object").css("transform", "translate3d(" + valueX + "px," + valueY + "px,0)");
})