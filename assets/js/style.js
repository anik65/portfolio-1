
//  sticky nav
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 150) {
        $("nav").addClass("fixed-top");
    } else {
        $("nav").removeClass("fixed-top");
    }
}); 
$('body').scrollspy({ target: ".nav", offset: 30 });

//preloader
$(window).on('load',function () {
    $(".site-preloader-wrap").fadeOut();
}); 

//toggle
$(".navbar-toggler").on("click", function () {
    $(".home-text").toggleClass("index");
});

//carousl
$('.carousel').carousel({
    interval: 3000
});

 //mixitup
new WOW().init();
var config = document.querySelector(".container-one");
var mixer = mixitup(config);

var config1 = document.querySelector(".mix-container");
var mixer1 = mixitup(config1);

 



 
